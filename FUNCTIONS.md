# Function Catalog

Every named function in the gronka codebase (`src/`, `scripts/`, `test/`), grouped by file.
Includes function declarations, named function/arrow expressions, object-property functions, and class/object methods, each with its line number.

**Total: 781 functions across 150 files.**

| Area | Functions |
|---|---|
| `src/utils/` | 324 |
| `src/webui/` | 171 |
| `scripts/` | 96 |
| `src/commands/` | 52 |
| `test/utils/` | 38 |
| `src/webui-server/` | 31 |
| `test/commands/` | 24 |
| `test/` | 11 |
| `test/handlers/` | 10 |
| `src/handlers/` | 8 |
| `test/helpers/` | 8 |
| `src/` | 5 |
| `test/scripts/` | 3 |

## `scripts/backfill-operation-urls.js` (3)

- `extractUrlFromLogs` — line 13
- `hasInvalidSocialMediaUrlError` — line 60
- `main` — line 92

## `scripts/bot-start.js` (2)

- `startProcess` — line 117
- `cleanup` — line 136

## `scripts/build-webui.js` (3)

- `getRollupNativePackage` — line 10
- `installRollupNative` — line 33
- `build` — line 60

## `scripts/convert-to-wiki.js` (7)

- `stripFrontmatter` — line 35
- `toTitleCase` — line 44
- `getPageNameFromPath` — line 54
- `convertLinks` — line 70
- `getWikiPageName` — line 94
- `processFile` — line 108
- `convertDocs` — line 135

## `scripts/convert-wiki-links.js` (3)

- `convertWikiLinks` — line 17
- `convertWikiFile` — line 34
- `convertAllWikiFiles` — line 43

## `scripts/debug-postgres-queries.js` (2)

- `getPostgresConfig` — line 14
- `testQueries` — line 37

## `scripts/delete-user-data.js` (5)

- `getFlagValue` — line 47
- `isR2Configured` — line 65
- `localPathFor` — line 77
- `askConfirmation` — line 90
- `main` — line 104

## `scripts/docker-reload.js` (6)

- `checkDockerDesktop` — line 28
- `isCredentialError` — line 48
- `buildImages` — line 64
- `imagesExistLocally` — line 112
- `startContainers` — line 139
- `tryStartContainers` — line 182

## `scripts/fix-stuck-operations.js` (1)

- `main` — line 15

## `scripts/local-up.js` (2)

- `_startProcess` — line 54
- `cleanup` — line 75

## `scripts/migrate-gifs-to-r2.js` (4)

- `getStoragePath` — line 21
- `sleep` — line 28
- `fileExists` — line 32
- `migrateGifsToR2` — line 41

## `scripts/migrate-storage.js` (4)

- `fileExists` — line 17
- `moveFiles` — line 26
- `removeEmptyDir` — line 104
- `main` — line 117

## `scripts/reset-clean-slate.js` (15)

- `checkDockerContainers` — line 48
- `stopDockerContainers` — line 127
- `startPostgresContainer` — line 152
- `stopPostgresContainer` — line 188
- `waitForPostgresHealthy` — line 216
- `stopProcesses` — line 277
- `deleteDirectory` — line 346
- `deleteLocalData` — line 371
- `isPostgresConfigured` — line 412
- `isR2Configured` — line 435
- `getAllR2Objects` — line 447
- `wipePostgresDatabase` — line 476
- `deleteR2Objects` — line 575
- `askConfirmation` — line 661
- `main` — line 683

## `scripts/reset-postgres-sequences.js` (3)

- `getPostgresConfig` — line 17
- `resetSerialSequences` — line 36
- `main` — line 67

## `scripts/sync-wiki-to-github.js` (7)

- `checkGitAvailable` — line 21
- `cloneWikiRepo` — line 33
- `initWikiRepo` — line 51
- `copyWikiFiles` — line 70
- `configureGitUser` — line 88
- `commitAndPush` — line 138
- `syncWikiToGitHub` — line 223

## `scripts/test-clean.js` (2)

- `shouldFilterLine` — line 49
- `processOutput` — line 78

## `scripts/test-database-wrapper.js` (1)

- `test` — line 17

## `scripts/test-db-reset.js` (5)

- `onnotice` — line 44
- `ensureRoleExists` — line 47
- `ensureDatabaseExists` — line 95
- `resetSchema` — line 109
- `precreateTables` — line 120

## `scripts/test-get24HourStats.js` (1)

- `main` — line 11

## `scripts/test-getAllUsersMetrics.js` (1)

- `test` — line 17

## `scripts/test-stats-fetch.js` (1)

- `main` — line 56

## `scripts/update-bot-status.js` (1)

- `getEnvVar` — line 75

## `scripts/upload-404-to-r2.js` (1)

- `upload404Cat` — line 10

## `scripts/utils.js` (16)

- `info` — line 15
- `warn` — line 22
- `error` — line 29
- `section` — line 37
- `checkDockerDaemon` — line 44
- `exec` — line 58
- `execOrError` — line 80
- `getGitCommit` — line 96
- `getTimestamp` — line 109
- `isContainerRunning` — line 118
- `getContainerStatus` — line 134
- `getContainerNames` — line 167
- `getContainerEnvVar` — line 185
- `hasHealthCheck` — line 218
- `getContainerHealth` — line 234
- `sleep` — line 249

## `src/bot.js` (5)

- `safeCompare` — line 85
- `basicAuth` — line 94
- `startStatsServer` — line 124
- `startBot` — line 426
- `gracefulShutdown` — line 450

## `src/commands/convert.js` (6)

- `checkAndReadLocalFileFromCdnUrl` — line 81
- `probeMediaInfo` — line 184
- `resolveVideoConversionOptions` — line 233
- `processConversion` — line 264
- `handleConvertContextMenu` — line 1090
- `handleConvertCommand` — line 1353

## `src/commands/download.js` (11)

- `isTwitterXUrl` — line 68
- `isTikTokUrl` — line 85
- `cobaltFallbackLabel` — line 99
- `getMaxVideoDuration` — line 125
- `getMaxVideoSize` — line 138
- `replyWithDirectMediaUrls` — line 163
- `cleanupTempFiles` — line 209
- `processDownload` — line 226
- `tryTwitterDirectUrl` — line 523
- `handleDownloadContextMenuCommand` — line 1635
- `handleDownloadCommand` — line 1775

## `src/commands/info.js` (3)

- `formatBytes` — line 22
- `formatProcessUptime` — line 36
- `handleInfoCommand` — line 57

## `src/commands/optimize.js` (5)

- `safeReply` — line 56
- `safeShowModal` — line 82
- `processOptimization` — line 114
- `handleOptimizeContextMenuCommand` — line 454
- `handleOptimizeCommand` — line 699

## `src/commands/shared/buffer-validation.js` (3)

- `validateVideoBuffer` — line 33
- `validateGifBuffer` — line 69
- `writeValidatedFileBuffer` — line 100

## `src/commands/shared/command-errors.js` (2)

- `curatedErrorMessage` — line 13
- `replyWithCuratedError` — line 24

## `src/commands/shared/command-guards.js` (3)

- `replyIfRateLimited` — line 26
- `resolveTimeOptions` — line 59
- `failWith` — line 63

## `src/commands/shared/message-adapter.js` (12)

- `toMessagePayload` — line 31
- `createMessageAdapter` — line 48
- `send` — line 51
- `getRaw` — line 59
- `getString` — line 76
- `getNumber` — line 80
- `getBoolean` — line 86
- `getAttachment` — line 92
- `reply` — line 97
- `deferReply` — line 103
- `editReply` — line 109
- `followUp` — line 122

## `src/commands/shared/run-media-command.js` (3)

- `runMediaCommand` — line 47
- `buildMetadata` — line 59
- `logStep` — line 76

## `src/commands/shared/url-cache.js` (2)

- `recordProcessedUrl` — line 25
- `trackR2UploadIfApplicable` — line 55

## `src/commands/stats.js` (2)

- `formatUptime` — line 24
- `handleStatsCommand` — line 46

## `src/handlers/modals.js` (1)

- `handleModalSubmit` — line 13

## `src/handlers/prefix-commands.js` (7)

- `isValidPrefix` — line 38
- `matchPrefix` — line 51
- `parseArgTokens` — line 76
- `resolveAttachment` — line 117
- `buildHelpEmbed` — line 140
- `handlePrefixSetting` — line 179
- `handlePrefixMessage` — line 250

## `src/utils/attachment-helpers.js` (2)

- `validateVideoAttachment` — line 35
- `validateImageAttachment` — line 67

## `src/utils/ban-check.js` (2)

- `replyIfBanned` — line 19
- `replyIfMaintenance` — line 64

## `src/utils/booru.js` (4)

- `matchSite` — line 32
- `parsePostId` — line 43
- `isBooruUrl` — line 53
- `downloadFromBooru` — line 72

## `src/utils/cobalt-queue.js` (8)

- `hashUrl` — line 26
- `normalizeConversionOptions` — line 36
- `hashUrlWithParams` — line 77
- `processQueue` — line 97
- `executeRequest` — line 108
- `queueCobaltRequest` — line 141
- `downloadPromise` — line 165
- `getQueueStats` — line 216

## `src/utils/cobalt.js` (14)

- `getCobaltErrorMessage` — line 38
- `analyzeError` — line 59
- `sleep` — line 143
- `normalizeSocialMediaUrlForCobalt` — line 185
- `isSocialMediaUrl` — line 260
- `callCobaltApi` — line 282
- `downloadPhoto` — line 406
- `downloadVideo` — line 487
- `downloadMediaFromPicker` — line 567
- `replaceTunnelHostname` — line 604
- `downloadFromCobalt` — line 634
- `getCobaltMediaUrls` — line 808
- `getRemoteContentLength` — line 860
- `downloadFromSocialMedia` — line 894

## `src/utils/config.js` (11)

- `parseIntEnv` — line 15
- `requireStringEnv` — line 53
- `getStringEnv` — line 67
- `parseIdList` — line 77
- `validateUrlFormat` — line 93
- `getGifQualityEnv` — line 108
- `getBotConfig` — line 127
- `get` — line 179
- `ownKeys` — line 182
- `getOwnPropertyDescriptor` — line 185
- `bot` — line 257

## `src/utils/database-init.js` (1)

- `initializeDatabaseWithErrorHandling` — line 20

## `src/utils/database/alerts-pg.js` (4)

- `insertAlert` — line 10
- `getAlerts` — line 59
- `getAlertComponents` — line 127
- `getAlertsCount` — line 145

## `src/utils/database/bans-pg.js` (5)

- `invalidateBanCache` — line 13
- `getBan` — line 26
- `banUser` — line 55
- `unbanUser` — line 83
- `listBans` — line 103

## `src/utils/database/connection.js` (16)

- `isTestMode` — line 12
- `isRunningInDocker` — line 42
- `getDefaultPostgresHost` — line 65
- `getPostgresConfig` — line 92
- `initPostgresConnection` — line 158
- `newInitPromise` — line 169
- `extractDbFromUrl` — line 267
- `getCurrentDatabaseName` — line 280
- `assertTestDatabase` — line 289
- `getPostgresConnection` — line 316
- `setPostgresConnection` — line 325
- `getPostgresInitPromise` — line 336
- `setPostgresInitPromise` — line 345
- `isPostgresInitialized` — line 353
- `closePostgresConnection` — line 361
- `checkPostgresHealth` — line 374

## `src/utils/database/guild-prefixes-pg.js` (4)

- `invalidateGuildPrefixCache` — line 15
- `getGuildPrefix` — line 28
- `setGuildPrefix` — line 56
- `clearGuildPrefix` — line 81

## `src/utils/database/helpers-pg.js` (4)

- `convertTimestampsToNumbers` — line 11
- `convertTimestampsInArray` — line 38
- `convertBigIntToNumbers` — line 53
- `convertBigIntInArray` — line 80

## `src/utils/database/init.js` (5)

- `initPostgresDatabase` — line 19
- `newInitPromise` — line 35
- `resetSerialSequences` — line 123
- `closePostgresDatabase` — line 166
- `ensurePostgresInitialized` — line 177

## `src/utils/database/logs-pg.js` (4)

- `insertLog` — line 14
- `getLogs` — line 44
- `getLogsCount` — line 163
- `getLogComponents` — line 246

## `src/utils/database/metrics-pg.js` (4)

- `insertOrUpdateUserMetrics` — line 32
- `getUserMetrics` — line 107
- `getAllUsersMetrics` — line 137
- `getUserMetricsCount` — line 219

## `src/utils/database/operations-pg.js` (13)

- `getCachedRecentOperations` — line 17
- `setCachedRecentOperations` — line 33
- `invalidateRecentOperationsCache` — line 41
- `insertOperationLog` — line 54
- `getOperationLogs` — line 78
- `getOperationTrace` — line 101
- `reconstructOperationsByIds` — line 209
- `getRecentOperations` — line 408
- `searchOperations` — line 471
- `p` — line 482
- `updateOperationLogMetadata` — line 606
- `getStuckOperations` — line 660
- `markOperationAsFailed` — line 712

## `src/utils/database/processed-urls-pg.js` (12)

- `getCachedProcessedUrl` — line 20
- `setCachedProcessedUrl` — line 38
- `invalidateProcessedUrlCache` — line 49
- `getProcessedUrl` — line 62
- `insertProcessedUrl` — line 106
- `getUserMedia` — line 176
- `getUserMediaCount` — line 212
- `getUserR2Media` — line 234
- `getUserR2MediaCount` — line 280
- `getR2UserStats` — line 308
- `deleteProcessedUrl` — line 346
- `deleteUserR2Media` — line 369

## `src/utils/database/schema-pg.js` (5)

- `getTableDefinitions` — line 10
- `getIndexDefinitions` — line 157
- `columnExists` — line 277
- `addFileSizeColumnIfNeeded` — line 292
- `ensureTemporaryUploadsCascadeDelete` — line 307

## `src/utils/database/settings-pg.js` (5)

- `invalidateSettingsCache` — line 13
- `getSetting` — line 27
- `getBooleanSetting` — line 55
- `setSetting` — line 69
- `getAllSettings` — line 94

## `src/utils/database/stats.js` (1)

- `get24HourStats` — line 8

## `src/utils/database/temporary-uploads-pg.js` (11)

- `getLogger` — line 11
- `insertTemporaryUpload` — line 26
- `getExpiredTemporaryUploads` — line 85
- `getLiveBytes` — line 116
- `getTemporaryUploadsByR2Key` — line 145
- `markTemporaryUploadDeleted` — line 170
- `markTemporaryUploadDeletionFailed` — line 199
- `getFailedDeletions` — line 225
- `deleteTemporaryUpload` — line 253
- `deleteTemporaryUploadsByR2Key` — line 276
- `getExpiredR2Keys` — line 299

## `src/utils/database/test-helpers.js` (6)

- `ensureLogsTableSchema` — line 18
- `truncateAllTables` — line 77
- `clearAllData` — line 110
- `getTestNamespace` — line 168
- `getUniqueTestTimestamp` — line 179
- `getUniqueTestComponent` — line 191

## `src/utils/database/users-pg.js` (6)

- `getCachedUser` — line 14
- `setCachedUser` — line 32
- `invalidateUserCache` — line 43
- `insertOrUpdateUser` — line 58
- `getUser` — line 99
- `getUniqueUserCount` — line 130

## `src/utils/discord-cdn.js` (4)

- `isDiscordCdnUrl` — line 10
- `isAttachmentExpired` — line 33
- `getRefreshedAttachmentURL` — line 58
- `getRequestHeaders` — line 101

## `src/utils/download-services.js` (2)

- `getServiceForUrl` — line 75
- `getDisabledServiceLabel` — line 95

## `src/utils/errors.js` (7)

- `constructor` — line 5
- `constructor` — line 18
- `constructor` — line 27
- `constructor` — line 36
- `constructor` — line 45
- `constructor` — line 54
- `constructor` — line 63

## `src/utils/file-downloader.js` (5)

- `downloadVideo` — line 27
- `downloadImage` — line 69
- `downloadFileFromUrl` — line 115
- `parseTenorUrl` — line 339
- `generateHash` — line 454

## `src/utils/gif-optimizer.js` (7)

- `isGifFile` — line 16
- `extractHashFromCdnUrl` — line 29
- `checkLocalGif` — line 68
- `optimizeGif` — line 92
- `optimizeGifImpl` — line 96
- `calculateSizeReduction` — line 192
- `formatSizeMb` — line 206

## `src/utils/hashing.js` (3)

- `hashBytesHex` — line 11
- `hashStringHex` — line 20
- `hashPartsHex` — line 30

## `src/utils/hentaigifz.js` (5)

- `isHentaiGifzUrl` — line 27
- `extractMediaUrl` — line 45
- `isMediaHostUrl` — line 79
- `decodeMediaUrl` — line 90
- `downloadFromHentaiGifz` — line 104

## `src/utils/interaction-helpers.js` (4)

- `safeInteractionReply` — line 11
- `safeInteractionEditReply` — line 37
- `safeInteractionFollowUp` — line 84
- `safeInteractionDeferReply` — line 112

## `src/utils/logger.js` (12)

- `setLogBroadcastCallback` — line 27
- `formatTimestampSeconds` — line 32
- `constructor` — line 37
- `sanitizeLogInput` — line 59
- `sanitizeForConsoleOutput` — line 82
- `formatMessage` — line 92
- `log` — line 110
- `debug` — line 170
- `info` — line 174
- `warn` — line 178
- `error` — line 182
- `createLogger` — line 187

## `src/utils/media-processing-queue.js` (5)

- `pump` — line 19
- `acquire` — line 27
- `grant` — line 29
- `runInMediaSlot` — line 53
- `getMediaQueueStats` — line 70

## `src/utils/ntfy-notifier.js` (6)

- `formatDuration` — line 14
- `sendNtfyNotification` — line 37
- `notifyCommandSuccess` — line 130
- `notifyCommandFailure` — line 151
- `notify` — line 176
- `setBroadcastCallback` — line 184

## `src/utils/operations-tracker.js` (18)

- `writeOperationLog` — line 36
- `flushAllOperationLogs` — line 48
- `getInstancePort` — line 61
- `getWebuiUrl` — line 67
- `setBroadcastCallback` — line 77
- `setUserMetricsBroadcastCallback` — line 87
- `broadcastUpdate` — line 96
- `buildCreationMetadata` — line 148
- `rememberOperation` — line 182
- `createFailedOperation` — line 203
- `createOperation` — line 275
- `updateOperationStatus` — line 316
- `getRecentOperations` — line 369
- `getOperation` — line 381
- `logOperationStep` — line 393
- `logOperationError` — line 429
- `updateUserMetricsForOperation` — line 458
- `cleanupStuckOperations` — line 547

## `src/utils/r2-cleanup.js` (3)

- `deleteExpiredR2Files` — line 20
- `startCleanupJob` — line 190
- `stopCleanupJob` — line 215

## `src/utils/r2-storage.js` (20)

- `assertR2Capacity` — line 28
- `initializeR2Client` — line 68
- `getR2Client` — line 96
- `uploadToR2` — line 109
- `fileExistsInR2` — line 188
- `getR2PublicUrl` — line 216
- `getR2KeyFromHash` — line 228
- `uploadGifToR2` — line 252
- `uploadVideoToR2` — line 267
- `uploadImageToR2` — line 295
- `gifExistsInR2` — line 319
- `downloadGifFromR2` — line 331
- `videoExistsInR2` — line 371
- `imageExistsInR2` — line 386
- `listObjectsInR2` — line 400
- `deleteFromR2` — line 448
- `extractR2KeyFromUrl` — line 482
- `formatTtlMessage` — line 503
- `formatR2UrlWithDisclaimer` — line 520
- `formatMultipleR2UrlsWithDisclaimer` — line 555

## `src/utils/rate-limit.js` (4)

- `refreshRateLimitSettings` — line 25
- `isAdmin` — line 47
- `checkRateLimit` — line 56
- `recordRateLimit` — line 86

## `src/utils/storage.js` (28)

- `shouldUploadToDiscord` — line 33
- `getCachedStats` — line 56
- `setCachedStats` — line 84
- `invalidateStatsCache` — line 102
- `getR2UsageCache` — line 112
- `setR2UsageCache` — line 132
- `incrementR2UsageCache` — line 144
- `initializeR2UsageCache` — line 168
- `getStoragePath` — line 212
- `detectFileType` — line 250
- `gifExists` — line 295
- `getGifPath` — line 321
- `saveGif` — line 343
- `cleanupTempFiles` — line 408
- `formatFileSize` — line 430
- `getVideoPath` — line 477
- `videoExists` — line 501
- `saveVideo` — line 530
- `getImagePath` — line 599
- `imageExists` — line 623
- `saveImage` — line 652
- `getStorageStats` — line 719
- `calculateStorageStats` — line 821
- `getCacheStats` — line 1096
- `getR2CacheStats` — line 1121
- `resolveTtlHoursForSize` — line 1165
- `resolveTtlHours` — line 1176
- `trackTemporaryUpload` — line 1197

## `src/utils/upload-tiers.js` (2)

- `parseTiers` — line 22
- `ttlHoursForSize` — line 50

## `src/utils/user-tracking.js` (5)

- `initializeUserTracking` — line 14
- `trackUser` — line 27
- `getUniqueUserCount` — line 49
- `trackRecentConversion` — line 67
- `getRecentConversions` — line 98

## `src/utils/validation.js` (5)

- `validateUrl` — line 8
- `parseTimestamp` — line 80
- `sanitizeFilename` — line 138
- `validateFileExtension` — line 170
- `validateFilename` — line 188

## `src/utils/video-processor/convert-animated-webp-to-gif.js` (2)

- `convertAnimatedWebpToGif` — line 26
- `convertAnimatedWebpToGifImpl` — line 30

## `src/utils/video-processor/convert-image-to-gif.js` (2)

- `convertImageToGif` — line 20
- `convertImageToGifImpl` — line 24

## `src/utils/video-processor/convert-to-gif.js` (4)

- `convertToGif` — line 23
- `convertToGifImpl` — line 27
- `cleanupPalette` — line 109
- `settle` — line 117

## `src/utils/video-processor/metadata.js` (1)

- `getVideoMetadata` — line 23

## `src/utils/video-processor/trim-gif.js` (1)

- `trimGif` — line 18

## `src/utils/video-processor/trim-video.js` (1)

- `trimVideo` — line 18

## `src/utils/video-processor/utils.js` (3)

- `validateNumericParameter` — line 16
- `isAnimatedWebp` — line 48
- `checkFFmpegInstalled` — line 60

## `src/utils/ytdlp-queue.js` (5)

- `pump` — line 18
- `acquire` — line 26
- `grant` — line 28
- `runInYtdlpSlot` — line 52
- `getYtdlpQueueStats` — line 69

## `src/utils/ytdlp.js` (13)

- `tooLargeMessage` — line 19
- `getCookieArgs` — line 37
- `constructor` — line 57
- `isYouTubeUrl` — line 69
- `isRedGifsUrl` — line 92
- `getYtdlpSite` — line 129
- `getContentType` — line 148
- `executeYtdlp` — line 179
- `executeYtdlpWithRetry` — line 462
- `getVideoDuration` — line 481
- `downloadWithYtdlp` — line 548
- `downloadFromYouTube` — line 713
- `isYtdlpAvailable` — line 729

## `src/webui-server/app.js` (1)

- `createApp` — line 39

## `src/webui-server/cache/crypto-cache.js` (3)

- `isCacheValid` — line 14
- `fetchCryptoPricesFromAPI` — line 21
- `getCryptoPrices` — line 38

## `src/webui-server/cache/stats-cache.js` (3)

- `getCacheTtl` — line 11
- `getStats` — line 23
- `getHealth` — line 87

## `src/webui-server/index.js` (5)

- `broadcastOperationWrapper` — line 49
- `broadcastLogWrapper` — line 52
- `broadcastAlertWrapper` — line 55
- `broadcastUserMetricsWrapper` — line 58
- `gracefulShutdown` — line 144

## `src/webui-server/middleware/security.js` (1)

- `securityHeaders` — line 2

## `src/webui-server/middleware/static.js` (1)

- `setHeaders` — line 13

## `src/webui-server/operations/enrichment.js` (1)

- `enrichOperationUsername` — line 7

## `src/webui-server/operations/reconstruction.js` (1)

- `reconstructOperationFromTrace` — line 11

## `src/webui-server/operations/storage.js` (1)

- `storeOperation` — line 11

## `src/webui-server/routes/operations.js` (1)

- `setSseClients` — line 15

## `src/webui-server/routes/settings.js` (1)

- `envValues` — line 118

## `src/webui-server/sse/broadcast.js` (5)

- `broadcast` — line 5
- `broadcastOperation` — line 19
- `broadcastLog` — line 24
- `broadcastAlert` — line 29
- `broadcastUserMetrics` — line 34

## `src/webui-server/sse/handlers.js` (4)

- `sendEvent` — line 9
- `cleanupDeadConnections` — line 18
- `heartbeatClients` — line 39
- `handleSseConnection` — line 58

## `src/webui-server/sse/server.js` (2)

- `startHeartbeatInterval` — line 12
- `stopHeartbeatInterval` — line 19

## `src/webui-server/utils/auth.js` (1)

- `getAuthHeaders` — line 6

## `src/webui/App.svelte` (5)

- `loadSidebarState` — line 38
- `persistSidebarState` — line 86
- `toggleSidebar` — line 94
- `navigateTo` — line 99
- `handleKeydown` — line 107

## `src/webui/components/Pagination.svelte` (3)

- `prev` — line 12
- `next` — line 18
- `changeLimit` — line 24

## `src/webui/components/ResponsiveFilterPanel.svelte` (2)

- `checkMobile` — line 12
- `toggle` — line 20

## `src/webui/components/ResponsiveGrid.svelte` (1)

- `checkViewport` — line 10

## `src/webui/components/ResponsiveSearchBar.svelte` (3)

- `handleInput` — line 10
- `handleClear` — line 17
- `handleSubmit` — line 26

## `src/webui/components/ResponsiveTable.svelte` (3)

- `checkMobile` — line 18
- `handleSort` — line 22
- `toggleExpand` — line 33

## `src/webui/main.js` (1)

- `init` — line 6

## `src/webui/pages/Alerts.svelte` (13)

- `fetchAlerts` — line 31
- `fetchComponents` — line 60
- `refetch` — line 71
- `handleClearFilters` — line 76
- `handlePage` — line 84
- `getSeverityClass` — line 89
- `parseMetadata` — line 93
- `alertKey` — line 104
- `toggleExpanded` — line 108
- `goToUser` — line 117
- `groupAlerts` — line 124
- `matchesFilters` — line 147
- `handleNewAlert` — line 163

## `src/webui/pages/BotSettings.svelte` (22)

- `loadActiveTab` — line 65
- `selectTab` — line 76
- `loadPresence` — line 106
- `updatePresence` — line 124
- `loadSettings` — line 153
- `parseTierRows` — line 177
- `serializeTiers` — line 190
- `syncTierDrafts` — line 199
- `updateTierRow` — line 209
- `addTierRow` — line 214
- `removeTierRow` — line 218
- `tierDirty` — line 222
- `tierPreview` — line 227
- `saveTiers` — line 241
- `flashSaved` — line 254
- `toggleSetting` — line 261
- `saveSetting` — line 267
- `handleTextSubmit` — line 295
- `listValues` — line 299
- `addListItem` — line 308
- `removeListItem` — line 322
- `labelFor` — line 329

## `src/webui/pages/Health.svelte` (2)

- `loadHealth` — line 15
- `loadPrices` — line 27

## `src/webui/pages/Logs.svelte` (14)

- `getLevelClass` — line 34
- `fetchLogs` — line 38
- `fetchComponents` — line 67
- `refetch` — line 79
- `handleLevelToggle` — line 84
- `handleComponentChange` — line 93
- `handleClearFilters` — line 97
- `handlePage` — line 105
- `toggleExpanded` — line 110
- `formatMetadata` — line 119
- `exportPage` — line 129
- `downloadBlob` — line 152
- `matchesFilters` — line 164
- `handleNewLog` — line 179

## `src/webui/pages/Moderation.svelte` (23)

- `fetchModerationEnabled` — line 22
- `toggleModerationEnabled` — line 33
- `fetchBans` — line 52
- `openBanModal` — line 67
- `closeBanModal` — line 74
- `handleBanUserSearchInput` — line 78
- `pickBanUser` — line 98
- `submitBan` — line 105
- `unbanUserRow` — line 138
- `switchTab` — line 152
- `showStatus` — line 183
- `fetchR2Users` — line 191
- `fetchR2Media` — line 214
- `resetSelectionState` — line 244
- `handleUserSelect` — line 248
- `handleFileTypeFilter` — line 264
- `handlePage` — line 270
- `toggleFileSelection` — line 277
- `toggleSelectAll` — line 286
- `refreshAfterDelete` — line 295
- `deleteFile` — line 300
- `bulkDelete` — line 323
- `deleteAllForUser` — line 370

## `src/webui/pages/Requests.svelte` (18)

- `debouncedFetch` — line 47
- `applyFilters` — line 55
- `readStateFromUrl` — line 65
- `writeStateToUrl` — line 90
- `formatTimestamp` — line 117
- `toggleExpanded` — line 140
- `loadTrace` — line 150
- `getErrorTypeLabel` — line 171
- `formatDuration` — line 176
- `formatFileSize` — line 183
- `truncateUrl` — line 190
- `fetchRequests` — line 196
- `handlePrevPage` — line 285
- `handleNextPage` — line 292
- `toggleStatus` — line 299
- `toggleType` — line 309
- `clearFilters` — line 319
- `getDisplayInput` — line 342

## `src/webui/pages/Sources.svelte` (8)

- `load` — line 23
- `parseIds` — line 40
- `persist` — line 51
- `toggle` — line 74
- `setCategory` — line 83
- `setAll` — line 94
- `matches` — line 109
- `inCategory` — line 112

## `src/webui/pages/Stats.svelte` (1)

- `loadStats` — line 9

## `src/webui/pages/UserProfile.svelte` (15)

- `fetchUserProfile` — line 33
- `fetchUserOperations` — line 64
- `fetchUserMedia` — line 93
- `handleMediaPrevPage` — line 122
- `handleMediaNextPage` — line 129
- `handleOperationsPrevPage` — line 136
- `handleOperationsNextPage` — line 143
- `truncateUrl` — line 150
- `formatBytes` — line 156
- `formatTimestamp` — line 164
- `formatRelativeTime` — line 170
- `calculateSuccessRate` — line 195
- `goBack` — line 200
- `fetchOperationTrace` — line 204
- `formatMetadata` — line 237

## `src/webui/pages/Users.svelte` (9)

- `fetchUsers` — line 18
- `handleSearch` — line 44
- `handleSort` — line 49
- `handlePrevPage` — line 60
- `handleNextPage` — line 67
- `viewUserProfile` — line 74
- `formatBytes` — line 78
- `calculateSuccessRate` — line 86
- `handleUserMetricsUpdate` — line 92

## `src/webui/stores/sse-store.js` (11)

- `updateHealthMetrics` — line 48
- `startHealthMonitoring` — line 63
- `stopHealthMonitoring` — line 98
- `connect` — line 112
- `handleMessage` — line 197
- `scheduleReconnect` — line 260
- `disconnect` — line 300
- `handleOnline` — line 323
- `handleOffline` — line 335
- `useSse` — line 346
- `reconnect` — line 378

## `src/webui/tests/main.test.js` (1)

- `init` — line 6

## `src/webui/utils/api.js` (6)

- `fetchStats` — line 1
- `fetchHealth` — line 14
- `formatUptime` — line 27
- `formatServerStartTime` — line 44
- `fetchCryptoPrices` — line 70
- `formatPrice` — line 83

## `src/webui/utils/format.js` (5)

- `formatTimestamp` — line 5
- `formatRelativeTime` — line 10
- `formatBytes` — line 24
- `formatDuration` — line 32
- `timeRangeToStartTime` — line 46

## `src/webui/utils/router.js` (5)

- `sanitizePropertyKey` — line 17
- `parseHash` — line 23
- `initRouter` — line 53
- `navigate` — line 66
- `isActivePage` — line 88

## `test/ban-check.test.js` (1)

- `makeInteraction` — line 12

## `test/commands/convert.test.js` (4)

- `convertTimeParameters` — line 9
- `validateTimeParameters` — line 104
- `validateDurationAgainstVideoLength` — line 162
- `getQualityParameter` — line 230

## `test/commands/download-e2e.test.js` (10)

- `fakeBuffer` — line 33
- `getCobaltMediaUrls` — line 60
- `downloadFromSocialMedia` — line 92
- `getYtdlpSite` — line 136
- `downloadVideo` — line 208
- `downloadImage` — line 209
- `downloadFileFromUrl` — line 210
- `cleanStorage` — line 231
- `downloadInteraction` — line 238
- `getNumber` — line 242

## `test/commands/download.test.js` (5)

- `convertTimeParameters` — line 9
- `validateTimeParameters` — line 113
- `shouldTrimFile` — line 171
- `getTrimmedVideoExtension` — line 224
- `shouldRegenerateHash` — line 252

## `test/commands/shared/buffer-validation.test.js` (4)

- `gif89a` — line 14
- `gif87a` — line 15
- `mp4` — line 16
- `webm` — line 18

## `test/commands/shared/message-adapter.test.js` (1)

- `makeFakeMessage` — line 9

## `test/docker-security.test.js` (6)

- `parseDockerCompose` — line 15
- `checkDockerSocketAccess` — line 154
- `escapeShellArg` — line 164
- `glob` — line 1272
- `walkDir` — line 1276
- `convertGlobToRegex` — line 1299

## `test/handlers/prefix-commands.test.js` (10)

- `makeMessage` — line 16
- `makeDeps` — line 51
- `trackUser` — line 62
- `isAdmin` — line 63
- `replyIfBanned` — line 64
- `replyIfMaintenance` — line 65
- `getGuildPrefix` — line 66
- `setGuildPrefix` — line 67
- `handleStatsCommand` — line 73
- `replyIfMaintenance` — line 248

## `test/helpers/fake-interaction.js` (8)

- `createFakeInteraction` — line 16
- `toCollection` — line 21
- `makeMessage` — line 27
- `fetch` — line 39
- `reply` — line 42
- `editReply` — line 47
- `deferReply` — line 51
- `followUp` — line 56

## `test/scripts/serve-site-security.test.js` (3)

- `validatePath` — line 44
- `findFile` — line 258
- `validatePath` — line 265

## `test/utils/attachment-helpers.test.js` (1)

- `createAttachment` — line 12

## `test/utils/cobalt-queue.test.js` (3)

- `downloadFn` — line 91
- `downloadFn` — line 134
- `downloadFn` — line 158

## `test/utils/guild-prefixes.test.js` (1)

- `uniqueGuildId` — line 16

## `test/utils/interaction-helpers.test.js` (17)

- `reply` — line 16
- `reply` — line 27
- `reply` — line 38
- `reply` — line 53
- `reply` — line 68
- `editReply` — line 81
- `editReply` — line 93
- `editReply` — line 105
- `editReply` — line 116
- `editReply` — line 131
- `deferReply` — line 148
- `deferReply` — line 159
- `deferReply` — line 170
- `deferReply` — line 185
- `followUp` — line 198
- `followUp` — line 210
- `followUp` — line 221

## `test/utils/operations-tracker.test.js` (3)

- `fetch` — line 503
- `send` — line 505
- `fetch` — line 523

## `test/utils/race-conditions.test.js` (2)

- `downloadFn` — line 100
- `downloadFn` — line 129

## `test/utils/video-processor-validation.test.js` (3)

- `validateNumericParameter` — line 6
- `valueOf` — line 210
- `toString` — line 211

## `test/utils/video-processor.test.js` (1)

- `createDummyVideoFile` — line 29

## `test/utils/webp-detection.test.js` (1)

- `webpHeader` — line 10

## `test/utils/ytdlp-queue.test.js` (1)

- `deferred` — line 6

## `test/utils/ytdlp-retry-e2e.test.js` (5)

- `fakeChildProcess` — line 14
- `spawn` — line 42
- `genericFailure` — line 67
- `rateLimitFailure` — line 72
- `success` — line 77

## `test/webui-server-operations.test.js` (1)

- `reconstructOperationFromTrace` — line 31

## `test/webui-server-settings.test.js` (1)

- `putSetting` — line 32

## `test/webui-server-sse-handlers.test.js` (2)

- `fakeReqRes` — line 11
- `waitForLogWrite` — line 24
