import { describe, test, before, after } from 'node:test';
import assert from 'node:assert';
import {
  DOWNLOAD_SERVICES,
  DOWNLOAD_SERVICE_IDS,
  getServiceForUrl,
  getDisabledServiceLabel,
} from '../../src/utils/download-services.js';
import { YTDLP_SITES } from '../../src/utils/ytdlp.js';
import { initDatabase, setSetting } from '../../src/utils/database.js';

describe('download-services registry', function describeDownloadServicesRegistry() {
  test('service ids are unique and non-empty', function testServiceIdsAreUniqueAndNon() {
    const ids = DOWNLOAD_SERVICES.map(function mapItem(s) {
      return s.id;
    });
    assert.strictEqual(ids.length, new Set(ids).size, 'duplicate service id');
    assert.ok(
      ids.every(function everyId(id) {
        return typeof id === 'string' && id.length > 0;
      })
    );
    assert.strictEqual(DOWNLOAD_SERVICE_IDS.size, ids.length);
  });

  test('every yt-dlp site has a registry entry', function testEveryYtDlpSiteHasA() {
    for (const site of YTDLP_SITES) {
      const id = site.name.toLowerCase();
      assert.ok(DOWNLOAD_SERVICE_IDS.has(id), `missing registry entry for ${site.name}`);
    }
  });

  test('getServiceForUrl maps representative URLs across categories', function testGetServiceForUrlMapsRepresentativeURLsAcrossCategories() {
    assert.strictEqual(getServiceForUrl('https://x.com/u/status/1')?.id, 'twitter');
    assert.strictEqual(getServiceForUrl('https://www.tiktok.com/@u/video/1')?.id, 'tiktok');
    assert.strictEqual(getServiceForUrl('https://v.redd.it/abc')?.id, 'reddit');
    assert.strictEqual(getServiceForUrl('https://youtu.be/abc')?.id, 'youtube');
    assert.strictEqual(getServiceForUrl('https://www.pornhub.com/view?x')?.id, 'pornhub');
    assert.strictEqual(getServiceForUrl('https://redgifs.com/watch/x')?.id, 'redgifs');
    assert.strictEqual(getServiceForUrl('https://hentaigifz.com/slug/')?.id, 'hentaigifz');
    assert.strictEqual(getServiceForUrl('https://danbooru.donmai.us/posts/1')?.id, 'danbooru');
    assert.strictEqual(getServiceForUrl('https://e926.net/posts/1')?.id, 'e621');
  });

  test('getServiceForUrl returns null for unknown and lookalike hosts', function testGetServiceForUrlReturnsNullForUnknownAnd() {
    assert.strictEqual(getServiceForUrl('https://example.com/x'), null);
    assert.strictEqual(getServiceForUrl('https://pornhub.com.evil.com/x'), null);
    assert.strictEqual(getServiceForUrl('not a url'), null);
  });
});

describe('getDisabledServiceLabel gating', function describeGetDisabledServiceLabelGating() {
  before(async function setupAll() {
    await initDatabase();
  });
  after(async function teardownAll() {
    await setSetting('disabled_services', '[]');
  });

  test('returns the label only for a disabled service', async function testReturnsTheLabelOnlyForA() {
    await setSetting('disabled_services', JSON.stringify(['pornhub']));
    assert.strictEqual(
      await getDisabledServiceLabel('https://www.pornhub.com/view_video.php?viewkey=x'),
      'Pornhub'
    );
    // a different service is unaffected
    assert.strictEqual(await getDisabledServiceLabel('https://youtube.com/watch?v=x'), null);
    // an unknown host is never gated
    assert.strictEqual(await getDisabledServiceLabel('https://example.com/x'), null);

    await setSetting('disabled_services', '[]');
    assert.strictEqual(
      await getDisabledServiceLabel('https://www.pornhub.com/view_video.php?viewkey=x'),
      null
    );
  });
});
