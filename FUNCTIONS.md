# Function Catalog

Every named function in the gronka codebase (`src/`, `scripts/`, `test/`), grouped by file.
Includes function declarations, named function expressions, named arrow/function-expression bindings, object-property functions, and class/object methods, each with its line number.

**Total: 2475 functions across 191 files.** Every function in the codebase now has a name: anonymous arrow callbacks were converted to named function expressions.

| Area                | Functions |
| ------------------- | --------- |
| `test/utils/`       | 724       |
| `src/utils/`        | 463       |
| `src/webui/`        | 345       |
| `test/`             | 209       |
| `scripts/`          | 184       |
| `test/commands/`    | 172       |
| `src/webui-server/` | 111       |
| `test/scripts/`     | 108       |
| `src/commands/`     | 68        |
| `test/handlers/`    | 44        |
| `src/`              | 27        |
| `src/handlers/`     | 10        |
| `test/helpers/`     | 10        |

## `scripts/backfill-operation-urls.js` (9)

- `extractUrlFromLogs` — line 13
- `findLog` — line 19
- `filterLog` — line 34
- `hasInvalidSocialMediaUrlError` — line 64
- `findLog` — line 70
- `filterLog` — line 78
- `main` — line 100
- `findLog` — line 144
- `onRejected` — line 196

## `scripts/bot-start.js` (9)

- `startProcess` — line 117
- `handleError` — line 125
- `cleanup` — line 136
- `onTimeout` — line 158
- `onTimeout` — line 164
- `handleSIGINT` — line 180
- `onTimeout` — line 183
- `handleSIGTERM` — line 188
- `onTimeout` — line 191

## `scripts/build-webui.js` (3)

- `getRollupNativePackage` — line 10
- `installRollupNative` — line 33
- `build` — line 60

## `scripts/convert-to-wiki.js` (14)

- `mapItem` — line 29
- `stripFrontmatter` — line 37
- `toTitleCase` — line 46
- `mapWord` — line 49
- `getPageNameFromPath` — line 58
- `convertLinks` — line 74
- `replaceMatch` — line 79
- `replaceMatch` — line 90
- `getWikiPageName` — line 101
- `mapWord` — line 107
- `processFile` — line 117
- `convertDocs` — line 144
- `filterFile` — line 153
- `mapFile` — line 156

## `scripts/convert-wiki-links.js` (7)

- `convertWikiLinks` — line 17
- `replaceMatch` — line 21
- `replaceMatch` — line 27
- `convertWikiFile` — line 37
- `convertAllWikiFiles` — line 46
- `filterFile` — line 53
- `mapFile` — line 56

## `scripts/debug-postgres-queries.js` (2)

- `getPostgresConfig` — line 14
- `testQueries` — line 37

## `scripts/delete-user-data.js` (9)

- `getFlagValue` — line 47
- `isR2Configured` — line 65
- `localPathFor` — line 77
- `askConfirmation` — line 90
- `promiseExecutor` — line 91
- `questionCallback` — line 97
- `main` — line 104
- `onRejected` — line 279
- `onRejected` — line 283

## `scripts/docker-reload-fast.js` (2)

- `runImmediately` — line 26
- `onRejected` — line 136

## `scripts/docker-reload.js` (16)

- `checkDockerDesktop` — line 28
- `isCredentialError` — line 48
- `someIndicator` — line 56
- `buildImages` — line 66
- `promiseExecutor` — line 67
- `handleData` — line 85
- `handleClose` — line 91
- `handleError` — line 100
- `imagesExistLocally` — line 114
- `startContainers` — line 141
- `tryStartContainers` — line 184
- `promiseExecutor` — line 185
- `handleData` — line 198
- `handleClose` — line 204
- `handleError` — line 213
- `runImmediately` — line 288

## `scripts/docker-restart.js` (1)

- `filterLine` — line 46

## `scripts/docker-up.js` (1)

- `filterLine` — line 45

## `scripts/fetch-code-scanning-issues.js` (2)

- `filterAlert` — line 87
- `forEachAlert` — line 107

## `scripts/fix-stuck-operations.js` (3)

- `main` — line 15
- `findOp` — line 50
- `onRejected` — line 89

## `scripts/local-down.js` (1)

- `onTimeout` — line 41

## `scripts/local-logs.js` (1)

- `handleSIGINT` — line 71

## `scripts/local-restart.js` (1)

- `onTimeout` — line 24

## `scripts/local-up.js` (6)

- `someItem` — line 22
- `_startProcess` — line 54
- `handleError` — line 63
- `cleanup` — line 75
- `handleSIGINT` — line 100
- `handleSIGTERM` — line 105

## `scripts/local-verify.js` (4)

- `promiseExecutor` — line 56
- `getCallback` — line 57
- `setTimeoutCallback` — line 66
- `runImmediately` — line 72

## `scripts/migrate-gifs-to-r2.js` (7)

- `getStoragePath` — line 21
- `sleep` — line 28
- `promiseExecutor` — line 29
- `fileExists` — line 34
- `migrateGifsToR2` — line 43
- `filterFile` — line 88
- `forEachItem` — line 209

## `scripts/migrate-storage.js` (9)

- `fileExists` — line 17
- `moveFiles` — line 26
- `mapFile` — line 42
- `filterItem` — line 54
- `mapItem` — line 57
- `removeEmptyDir` — line 110
- `main` — line 123
- `everyItem` — line 175
- `onRejected` — line 203

## `scripts/reset-clean-slate.js` (28)

- `checkDockerContainers` — line 48
- `filterLine` — line 74
- `stopDockerContainers` — line 129
- `startPostgresContainer` — line 154
- `stopPostgresContainer` — line 190
- `waitForPostgresHealthy` — line 218
- `stopProcesses` — line 279
- `onTimeout` — line 317
- `deleteDirectory` — line 348
- `deleteLocalData` — line 373
- `filterItem` — line 403
- `isPostgresConfigured` — line 416
- `isR2Configured` — line 439
- `getAllR2Objects` — line 451
- `filterObj` — line 468
- `wipePostgresDatabase` — line 482
- `deleteR2Objects` — line 581
- `forEachObj` — line 608
- `forEachKey` — line 655
- `forEachKey` — line 660
- `askConfirmation` — line 671
- `promiseExecutor` — line 672
- `questionCallback` — line 683
- `main` — line 693
- `mapDir` — line 729
- `mapItem` — line 770
- `filterItem` — line 855
- `onRejected` — line 914

## `scripts/reset-postgres-sequences.js` (4)

- `getPostgresConfig` — line 17
- `resetSerialSequences` — line 36
- `main` — line 67
- `onRejected` — line 91

## `scripts/sync-wiki-to-github.js` (7)

- `checkGitAvailable` — line 21
- `cloneWikiRepo` — line 33
- `initWikiRepo` — line 51
- `copyWikiFiles` — line 70
- `configureGitUser` — line 88
- `commitAndPush` — line 138
- `syncWikiToGitHub` — line 223

## `scripts/test-clean.js` (8)

- `shouldFilterLine` — line 49
- `somePattern` — line 63
- `somePattern` — line 72
- `processOutput` — line 86
- `someItem` — line 109
- `handleClose` — line 159
- `filterLine` — line 163
- `handleError` — line 173

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

## `scripts/utils.js` (19)

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
- `someName` — line 124
- `getContainerStatus` — line 136
- `getContainerNames` — line 169
- `filterName` — line 175
- `getContainerEnvVar` — line 189
- `hasHealthCheck` — line 222
- `getContainerHealth` — line 238
- `sleep` — line 253
- `promiseExecutor` — line 254

## `src/bot.js` (26)

- `onInterval` — line 47
- `safeCompare` — line 85
- `basicAuth` — line 94
- `startStatsServer` — line 124
- `useCallback` — line 145
- `handlePostApiBotStatus` — line 154
- `handleGetApiBotStatus` — line 214
- `findItem` — line 221
- `handleGetApiStats24h` — line 233
- `listenCallback` — line 260
- `handleError` — line 265
- `onceCallback` — line 271
- `onInterval` — line 306
- `onInterval` — line 312
- `onCallback` — line 348
- `onRejected` — line 355
- `onCallback` — line 400
- `onCallback` — line 408
- `startBot` — line 429
- `gracefulShutdown` — line 453
- `closeCallback` — line 459
- `onTimeout` — line 464
- `handleSIGTERM` — line 469
- `handleSIGINT` — line 472
- `handleUnhandledRejection` — line 475
- `handleUncaughtException` — line 478

## `src/commands/convert.js` (10)

- `checkAndReadLocalFileFromCdnUrl` — line 81
- `probeMediaInfo` — line 184
- `findItem` — line 190
- `resolveVideoConversionOptions` — line 235
- `processConversion` — line 266
- `runMediaCommandCallback` — line 279
- `handleConvertContextMenu` — line 1092
- `findAtt` — line 1123
- `findAtt` — line 1127
- `handleConvertCommand` — line 1355

## `src/commands/download.js` (19)

- `isTwitterXUrl` — line 68
- `isTikTokUrl` — line 85
- `cobaltFallbackLabel` — line 99
- `getMaxVideoDuration` — line 125
- `getMaxVideoSize` — line 138
- `replyWithDirectMediaUrls` — line 163
- `queueCobaltRequestCallback` — line 174
- `cleanupTempFiles` — line 211
- `processDownload` — line 228
- `runMediaCommandCallback` — line 238
- `anonymousFn` — line 389
- `queueCobaltRequestCallback` — line 497
- `tryTwitterDirectUrl` — line 525
- `filterItem` — line 848
- `filterItem` — line 851
- `mapResult` — line 856
- `mapItem` — line 863
- `handleDownloadContextMenuCommand` — line 1643
- `handleDownloadCommand` — line 1783

## `src/commands/info.js` (3)

- `formatBytes` — line 22
- `formatProcessUptime` — line 36
- `handleInfoCommand` — line 57

## `src/commands/optimize.js` (7)

- `safeReply` — line 56
- `safeShowModal` — line 82
- `processOptimization` — line 114
- `runMediaCommandCallback` — line 126
- `handleOptimizeContextMenuCommand` — line 454
- `findAtt` — line 485
- `handleOptimizeCommand` — line 699

## `src/commands/shared/buffer-validation.js` (5)

- `validateVideoBuffer` — line 33
- `someItem` — line 50
- `validateGifBuffer` — line 72
- `someValidSig` — line 84
- `writeValidatedFileBuffer` — line 105

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

## `src/handlers/prefix-commands.js` (9)

- `isValidPrefix` — line 38
- `matchPrefix` — line 51
- `parseArgTokens` — line 76
- `resolveAttachment` — line 117
- `buildHelpEmbed` — line 140
- `handlePrefixSetting` — line 179
- `handlePrefixMessage` — line 250
- `onRejected` — line 287
- `onRejected` — line 295

## `src/register-commands.js` (1)

- `runImmediately` — line 220

## `src/utils/attachment-helpers.js` (2)

- `validateVideoAttachment` — line 35
- `validateImageAttachment` — line 67

## `src/utils/ban-check.js` (2)

- `replyIfBanned` — line 19
- `replyIfMaintenance` — line 64

## `src/utils/booru.js` (5)

- `matchSite` — line 32
- `findSite` — line 35
- `parsePostId` — line 47
- `isBooruUrl` — line 57
- `downloadFromBooru` — line 76

## `src/utils/cobalt-queue.js` (12)

- `hashUrl` — line 26
- `normalizeConversionOptions` — line 36
- `hashUrlWithParams` — line 77
- `mapKey` — line 88
- `processQueue` — line 101
- `executeRequest` — line 112
- `queueCobaltRequest` — line 145
- `runImmediately` — line 169
- `promiseExecutor` — line 194
- `onFulfilled` — line 209
- `onRejected` — line 212
- `getQueueStats` — line 224

## `src/utils/cobalt.js` (24)

- `getCobaltErrorMessage` — line 38
- `analyzeError` — line 59
- `sleep` — line 143
- `promiseExecutor` — line 144
- `normalizeSocialMediaUrlForCobalt` — line 187
- `isSocialMediaUrl` — line 262
- `someDomain` — line 267
- `callCobaltApi` — line 284
- `downloadPhoto` — line 408
- `downloadVideo` — line 489
- `downloadMediaFromPicker` — line 569
- `filterItem` — line 571
- `filterItem` — line 581
- `filterItem` — line 585
- `mapItem` — line 592
- `replaceTunnelHostname` — line 614
- `downloadFromCobalt` — line 644
- `getCobaltMediaUrls` — line 818
- `filterItem` — line 828
- `filterItem` — line 831
- `mapItem` — line 834
- `getRemoteContentLength` — line 876
- `downloadFromSocialMedia` — line 910
- `accumulateSum` — line 928

## `src/utils/config.js` (13)

- `parseIntEnv` — line 15
- `requireStringEnv` — line 53
- `getStringEnv` — line 67
- `parseIdList` — line 77
- `mapId` — line 84
- `filterId` — line 87
- `validateUrlFormat` — line 97
- `getGifQualityEnv` — line 112
- `getBotConfig` — line 131
- `get` — line 183
- `ownKeys` — line 186
- `getOwnPropertyDescriptor` — line 189
- `bot` — line 261

## `src/utils/database-init.js` (1)

- `initializeDatabaseWithErrorHandling` — line 20

## `src/utils/database/alerts-pg.js` (5)

- `insertAlert` — line 10
- `getAlerts` — line 59
- `getAlertComponents` — line 127
- `mapRow` — line 137
- `getAlertsCount` — line 147

## `src/utils/database/bans-pg.js` (6)

- `invalidateBanCache` — line 13
- `getBan` — line 26
- `banUser` — line 55
- `unbanUser` — line 83
- `listBans` — line 103
- `mapRow` — line 114

## `src/utils/database/connection.js` (19)

- `isTestMode` — line 12
- `someArg` — line 30
- `isRunningInDocker` — line 44
- `getDefaultPostgresHost` — line 67
- `getPostgresConfig` — line 94
- `initPostgresConnection` — line 160
- `runImmediately` — line 171
- `anonymousFn` — line 201
- `anonymousFn` — line 202
- `extractDbFromUrl` — line 269
- `getCurrentDatabaseName` — line 282
- `assertTestDatabase` — line 291
- `getPostgresConnection` — line 318
- `setPostgresConnection` — line 327
- `getPostgresInitPromise` — line 338
- `setPostgresInitPromise` — line 347
- `isPostgresInitialized` — line 355
- `closePostgresConnection` — line 363
- `checkPostgresHealth` — line 376

## `src/utils/database/guild-prefixes-pg.js` (4)

- `invalidateGuildPrefixCache` — line 15
- `getGuildPrefix` — line 28
- `setGuildPrefix` — line 56
- `clearGuildPrefix` — line 81

## `src/utils/database/helpers-pg.js` (6)

- `convertTimestampsToNumbers` — line 11
- `convertTimestampsInArray` — line 38
- `mapObj` — line 42
- `convertBigIntToNumbers` — line 55
- `convertBigIntInArray` — line 82
- `mapObj` — line 86

## `src/utils/database/init.js` (6)

- `initPostgresDatabase` — line 19
- `runImmediately` — line 35
- `promiseExecutor` — line 69
- `resetSerialSequences` — line 125
- `closePostgresDatabase` — line 168
- `ensurePostgresInitialized` — line 179

## `src/utils/database/logs-pg.js` (10)

- `insertLog` — line 14
- `getLogs` — line 44
- `mapItem` — line 77
- `mapItem` — line 99
- `mapLog` — line 146
- `getLogsCount` — line 171
- `mapItem` — line 200
- `mapItem` — line 222
- `getLogComponents` — line 262
- `mapItem` — line 272

## `src/utils/database/metrics-pg.js` (4)

- `insertOrUpdateUserMetrics` — line 32
- `getUserMetrics` — line 107
- `getAllUsersMetrics` — line 137
- `getUserMetricsCount` — line 219

## `src/utils/database/operations-pg.js` (36)

- `getCachedRecentOperations` — line 17
- `setCachedRecentOperations` — line 33
- `invalidateRecentOperationsCache` — line 41
- `insertOperationLog` — line 54
- `getOperationLogs` — line 78
- `getOperationTrace` — line 101
- `mapLog` — line 116
- `findLog` — line 132
- `filterLog` — line 138
- `forEachLog` — line 147
- `someLog` — line 161
- `filterLog` — line 204
- `reconstructOperationsByIds` — line 215
- `mapLog` — line 225
- `findLog` — line 243
- `filterLog` — line 253
- `filterLog` — line 266
- `forEachLog` — line 299
- `filterLog` — line 310
- `mapLog` — line 313
- `mapLog` — line 339
- `mapLog` — line 348
- `mapOp` — line 407
- `forEachOp` — line 412
- `mapStep` — line 414
- `getRecentOperations` — line 428
- `mapRow` — line 453
- `searchOperations` — line 493
- `p` — line 504
- `mapRow` — line 611
- `mapId` — line 618
- `compareItems` — line 622
- `updateOperationLogMetadata` — line 636
- `getStuckOperations` — line 690
- `mapRow` — line 712
- `markOperationAsFailed` — line 744

## `src/utils/database/processed-urls-pg.js` (13)

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
- `mapRow` — line 333
- `deleteProcessedUrl` — line 348
- `deleteUserR2Media` — line 371

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

## `src/utils/database/temporary-uploads-pg.js` (12)

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
- `mapRow` — line 315

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

## `src/utils/download-services.js` (6)

- `mapSite` — line 31
- `mapItem` — line 71
- `getServiceForUrl` — line 81
- `findService` — line 89
- `someHost` — line 90
- `getDisabledServiceLabel` — line 103

## `src/utils/file-downloader.js` (5)

- `downloadVideo` — line 27
- `downloadImage` — line 69
- `downloadFileFromUrl` — line 115
- `parseTenorUrl` — line 339
- `generateHash` — line 454

## `src/utils/gif-optimizer.js` (11)

- `isGifFile` — line 16
- `extractHashFromCdnUrl` — line 29
- `checkLocalGif` — line 68
- `optimizeGif` — line 92
- `runInMediaSlotCallback` — line 93
- `optimizeGifImpl` — line 98
- `promiseExecutor` — line 130
- `handleData` — line 136
- `handleClose` — line 141
- `calculateSizeReduction` — line 194
- `formatSizeMb` — line 208

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

## `src/utils/interaction-helpers.js` (5)

- `safeInteractionReply` — line 11
- `safeInteractionEditReply` — line 37
- `promiseExecutor` — line 66
- `safeInteractionFollowUp` — line 86
- `safeInteractionDeferReply` — line 114

## `src/utils/logger.js` (14)

- `setLogBroadcastCallback` — line 27
- `formatTimestampSeconds` — line 32
- `onRejected` — line 46
- `sanitizeLogInput` — line 59
- `sanitizeForConsoleOutput` — line 82
- `formatMessage` — line 92
- `sanitizeArg` — line 97
- `log` — line 105
- `sanitizeArg` — line 124
- `debug` — line 162
- `info` — line 166
- `warn` — line 170
- `error` — line 174
- `createLogger` — line 179

## `src/utils/media-processing-queue.js` (7)

- `pump` — line 19
- `acquire` — line 27
- `promiseExecutor` — line 28
- `grant` — line 29
- `resolveCallback` — line 32
- `runInMediaSlot` — line 53
- `getMediaQueueStats` — line 70

## `src/utils/ntfy-notifier.js` (6)

- `formatDuration` — line 14
- `sendNtfyNotification` — line 37
- `notifyCommandSuccess` — line 130
- `notifyCommandFailure` — line 151
- `notify` — line 176
- `setBroadcastCallback` — line 184

## `src/utils/operations-tracker.js` (28)

- `writeOperationLog` — line 36
- `onRejected` — line 38
- `onSettled` — line 43
- `flushAllOperationLogs` — line 52
- `getInstancePort` — line 65
- `getWebuiUrl` — line 71
- `setBroadcastCallback` — line 81
- `setUserMetricsBroadcastCallback` — line 91
- `broadcastUpdate` — line 100
- `buildCreationMetadata` — line 152
- `rememberOperation` — line 186
- `createFailedOperation` — line 207
- `onRejected` — line 259
- `createOperation` — line 279
- `updateOperationStatus` — line 320
- `findOp` — line 321
- `onRejected` — line 362
- `getRecentOperations` — line 375
- `getOperation` — line 387
- `findOp` — line 388
- `logOperationStep` — line 401
- `findOp` — line 402
- `logOperationError` — line 439
- `findOp` — line 440
- `updateUserMetricsForOperation` — line 470
- `cleanupStuckOperations` — line 559
- `findOp` — line 596
- `findLog` — line 620

## `src/utils/r2-cleanup.js` (6)

- `deleteExpiredR2Files` — line 20
- `filterItem` — line 59
- `startCleanupJob` — line 192
- `onRejected` — line 196
- `onInterval` — line 201
- `stopCleanupJob` — line 217

## `src/utils/r2-storage.js` (21)

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
- `filterUrl` — line 572

## `src/utils/rate-limit.js` (5)

- `refreshRateLimitSettings` — line 25
- `filterId` — line 31
- `isAdmin` — line 53
- `checkRateLimit` — line 62
- `recordRateLimit` — line 92

## `src/utils/storage.js` (37)

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
- `mapFilePath` — line 410
- `formatFileSize` — line 430
- `getVideoPath` — line 477
- `videoExists` — line 501
- `saveVideo` — line 530
- `getImagePath` — line 599
- `imageExists` — line 623
- `saveImage` — line 652
- `getStorageStats` — line 719
- `promiseExecutor` — line 755
- `onTimeout` — line 756
- `calculateStorageStats` — line 823
- `filterObj` — line 847
- `filterObj` — line 859
- `filterObj` — line 873
- `filterItem` — line 909
- `filterItem` — line 936
- `getCacheStats` — line 1100
- `mapItem` — line 1105
- `getR2CacheStats` — line 1127
- `resolveTtlHoursForSize` — line 1171
- `resolveTtlHours` — line 1182
- `trackTemporaryUpload` — line 1203

## `src/utils/upload-tiers.js` (3)

- `parseTiers` — line 22
- `compareItems` — line 39
- `ttlHoursForSize` — line 52

## `src/utils/user-tracking.js` (5)

- `initializeUserTracking` — line 14
- `trackUser` — line 27
- `getUniqueUserCount` — line 49
- `trackRecentConversion` — line 67
- `getRecentConversions` — line 98

## `src/utils/validation.js` (6)

- `validateUrl` — line 8
- `parseTimestamp` — line 80
- `sanitizeFilename` — line 138
- `validateFileExtension` — line 170
- `someAllowed` — line 176
- `validateFilename` — line 188

## `src/utils/video-processor/convert-animated-webp-to-gif.js` (6)

- `convertAnimatedWebpToGif` — line 26
- `runInMediaSlotCallback` — line 27
- `convertAnimatedWebpToGifImpl` — line 32
- `promiseExecutor` — line 65
- `handleData` — line 71
- `handleClose` — line 76

## `src/utils/video-processor/convert-image-to-gif.js` (8)

- `convertImageToGif` — line 20
- `runInMediaSlotCallback` — line 21
- `convertImageToGifImpl` — line 26
- `promiseExecutor` — line 79
- `handleError` — line 97
- `handleEnd` — line 101
- `handleError` — line 118
- `handleEnd` — line 128

## `src/utils/video-processor/convert-to-gif.js` (12)

- `convertToGif` — line 23
- `runInMediaSlotCallback` — line 24
- `convertToGifImpl` — line 29
- `promiseExecutor` — line 97
- `cleanupPalette` — line 111
- `settle` — line 119
- `onTimeout` — line 126
- `onSettled` — line 137
- `handleError` — line 154
- `handleEnd` — line 159
- `handleError` — line 181
- `handleEnd` — line 187

## `src/utils/video-processor/metadata.js` (6)

- `getVideoMetadata` — line 23
- `promiseExecutor` — line 24
- `handleData` — line 42
- `handleData` — line 45
- `handleError` — line 49
- `handleClose` — line 53

## `src/utils/video-processor/trim-gif.js` (4)

- `trimGif` — line 18
- `promiseExecutor` — line 63
- `handleError` — line 98
- `handleEnd` — line 102

## `src/utils/video-processor/trim-video.js` (4)

- `trimVideo` — line 18
- `promiseExecutor` — line 63
- `handleError` — line 107
- `handleEnd` — line 111

## `src/utils/video-processor/utils.js` (3)

- `validateNumericParameter` — line 16
- `isAnimatedWebp` — line 48
- `checkFFmpegInstalled` — line 60

## `src/utils/ytdlp-queue.js` (7)

- `pump` — line 18
- `acquire` — line 26
- `promiseExecutor` — line 27
- `grant` — line 28
- `resolveCallback` — line 31
- `runInYtdlpSlot` — line 52
- `getYtdlpQueueStats` — line 69

## `src/utils/ytdlp.js` (33)

- `tooLargeMessage` — line 19
- `getCookieArgs` — line 37
- `constructor` — line 57
- `isYouTubeUrl` — line 69
- `isRedGifsUrl` — line 92
- `getYtdlpSite` — line 129
- `someItem` — line 134
- `getContentType` — line 152
- `executeYtdlp` — line 183
- `promiseExecutor` — line 193
- `handleData` — line 246
- `handleData` — line 250
- `onTimeout` — line 254
- `handleClose` — line 259
- `mapLine` — line 294
- `filterLine` — line 297
- `handleError` — line 448
- `executeYtdlpWithRetry` — line 468
- `promiseExecutor` — line 476
- `getVideoDuration` — line 489
- `promiseExecutor` — line 490
- `handleData` — line 501
- `handleData` — line 505
- `onTimeout` — line 509
- `handleClose` — line 514
- `handleError` — line 538
- `downloadWithYtdlp` — line 556
- `runInYtdlpSlotCallback` — line 609
- `downloadFromYouTube` — line 721
- `isYtdlpAvailable` — line 737
- `promiseExecutor` — line 738
- `handleClose` — line 743
- `handleError` — line 747

## `src/webui-server/app.js` (5)

- `createApp` — line 39
- `handleGetRoot` — line 49
- `handleGetApiEvents` — line 57
- `handleGetSplat` — line 81
- `handleError` — line 91

## `src/webui-server/cache/crypto-cache.js` (3)

- `isCacheValid` — line 14
- `fetchCryptoPricesFromAPI` — line 21
- `getCryptoPrices` — line 38

## `src/webui-server/cache/stats-cache.js` (3)

- `getCacheTtl` — line 11
- `getStats` — line 23
- `getHealth` — line 87

## `src/webui-server/index.js` (9)

- `broadcastOperationWrapper` — line 49
- `broadcastLogWrapper` — line 52
- `broadcastAlertWrapper` — line 55
- `broadcastUserMetricsWrapper` — line 58
- `runImmediately` — line 63
- `listenCallback` — line 133
- `startHeartbeatIntervalCallback` — line 139
- `gracefulShutdown` — line 146
- `closeCallback` — line 152

## `src/webui-server/middleware/security.js` (1)

- `securityHeaders` — line 2

## `src/webui-server/middleware/static.js` (1)

- `setHeaders` — line 13

## `src/webui-server/operations/enrichment.js` (1)

- `enrichOperationUsername` — line 7

## `src/webui-server/operations/reconstruction.js` (9)

- `reconstructOperationFromTrace` — line 11
- `findLog` — line 16
- `filterLog` — line 27
- `filterLog` — line 39
- `forEachLog` — line 73
- `filterLog` — line 81
- `mapLog` — line 84
- `mapLog` — line 114
- `mapLog` — line 124

## `src/webui-server/operations/storage.js` (2)

- `storeOperation` — line 11
- `findIndexOp` — line 15

## `src/webui-server/routes/alerts.js` (2)

- `handleGetApiAlertsComponents` — line 9
- `handleGetApiAlerts` — line 23

## `src/webui-server/routes/bans.js` (3)

- `handleGetApiBans` — line 9
- `handlePostApiBans` — line 20
- `handleDeleteApiBansByUserId` — line 44

## `src/webui-server/routes/bot-status.js` (4)

- `handlePostApiBotStatus` — line 13
- `onRejected` — line 42
- `handleGetApiBotStatus` — line 60
- `onRejected` — line 73

## `src/webui-server/routes/logs.js` (8)

- `handleGetApiLogs` — line 9
- `flatMapItem` — line 39
- `mapSub` — line 41
- `mapItem` — line 48
- `flatMapItem` — line 63
- `mapSub` — line 65
- `mapItem` — line 72
- `handleGetApiLogsComponents` — line 135

## `src/webui-server/routes/moderation.js` (5)

- `handleGetApiModerationR2Users` — line 18
- `handleGetApiModerationUsersBy` — line 34
- `handleDeleteApiModerationFilesBulk` — line 71
- `handleDeleteApiModerationFilesBy` — line 161
- `handleDeleteApiModerationUsersBy` — line 222

## `src/webui-server/routes/operations.js` (8)

- `setSseClients` — line 15
- `handlePostApiOperations` — line 20
- `handlePostApiUserMetrics` — line 64
- `handleGetApiRequests` — line 82
- `handleGetApiOperationsByOperationId` — line 145
- `findOp` — line 150
- `filterLog` — line 172
- `handleGetApiOperationsByOperationId` — line 203

## `src/webui-server/routes/proxy.js` (3)

- `handleGetApiStats` — line 10
- `handleGetApiHealth` — line 24
- `handleGetApiCryptoPrices` — line 38

## `src/webui-server/routes/settings.js` (12)

- `envValues` — line 118
- `mapId` — line 121
- `filterId` — line 124
- `handleGetApiSettings` — line 131
- `mapItem` — line 153
- `handlePutApiSettingsByKey` — line 173
- `mapItem` — line 228
- `someItem` — line 243
- `mapItem` — line 254
- `someItem` — line 261
- `someItem` — line 276
- `filterId` — line 286

## `src/webui-server/routes/users.js` (11)

- `handleGetApiUsers` — line 19
- `handleGetApiUsersByUserId` — line 105
- `handleGetApiUsersByUserId` — line 130
- `filterOp` — line 138
- `filterOp` — line 146
- `mapOp` — line 152
- `filterOp` — line 156
- `compareItems` — line 159
- `compareItems` — line 165
- `handleGetApiUsersByUserId` — line 190
- `handleGetApiUsersByUserId` — line 223

## `src/webui-server/sse/broadcast.js` (6)

- `broadcast` — line 5
- `forEachClient` — line 7
- `broadcastOperation` — line 19
- `broadcastLog` — line 24
- `broadcastAlert` — line 29
- `broadcastUserMetrics` — line 34

## `src/webui-server/sse/handlers.js` (11)

- `sendEvent` — line 9
- `cleanupDeadConnections` — line 18
- `forEachClient` — line 20
- `forEachClient` — line 26
- `heartbeatClients` — line 39
- `forEachClient` — line 40
- `handleSseConnection` — line 58
- `mapOp` — line 75
- `forEachAlert` — line 88
- `handleClose` — line 100
- `handleError` — line 105

## `src/webui-server/sse/server.js` (3)

- `startHeartbeatInterval` — line 12
- `onInterval` — line 13
- `stopHeartbeatInterval` — line 19

## `src/webui-server/utils/auth.js` (1)

- `getAuthHeaders` — line 6

## `src/webui/App.svelte` (9)

- `loadSidebarState` — line 38
- `onMountCallback` — line 68
- `onDestroyCallback` — line 78
- `persistSidebarState` — line 86
- `toggleSidebar` — line 94
- `navigateTo` — line 99
- `handleKeydown` — line 107
- `findItem` — line 139
- `handleClick` — line 184

## `src/webui/components/Pagination.svelte` (3)

- `prev` — line 12
- `next` — line 18
- `changeLimit` — line 24

## `src/webui/components/ResponsiveFilterPanel.svelte` (4)

- `checkMobile` — line 12
- `toggle` — line 20
- `onMountCallback` — line 26
- `anonymousFn` — line 29

## `src/webui/components/ResponsiveGrid.svelte` (3)

- `checkViewport` — line 10
- `onMountCallback` — line 18
- `anonymousFn` — line 21

## `src/webui/components/ResponsiveSearchBar.svelte` (3)

- `handleInput` — line 10
- `handleClear` — line 17
- `handleSubmit` — line 26

## `src/webui/components/ResponsiveTable.svelte` (9)

- `checkMobile` — line 18
- `handleSort` — line 22
- `toggleExpand` — line 33
- `compareItems` — line 40
- `onMountCallback` — line 58
- `anonymousFn` — line 61
- `handleClick` — line 88
- `handleClick` — line 122
- `handleClick` — line 142

## `src/webui/main.js` (1)

- `init` — line 6

## `src/webui/pages/Alerts.svelte` (21)

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
- `mapAlert` — line 144
- `matchesFilters` — line 149
- `handleNewAlert` — line 165
- `onMountCallback` — line 173
- `subscribeCallback` — line 178
- `someAlert` — line 181
- `anonymousFn` — line 192
- `handleKeydown` — line 244
- `handleClick` — line 278
- `handleClick` — line 317

## `src/webui/pages/BotSettings.svelte` (58)

- `loadActiveTab` — line 65
- `someItem` — line 70
- `selectTab` — line 81
- `flatMapItem` — line 92
- `filterItem` — line 96
- `findItem` — line 106
- `filterItem` — line 109
- `loadPresence` — line 122
- `onRejected` — line 126
- `updatePresence` — line 142
- `onRejected` — line 155
- `loadSettings` — line 173
- `parseTierRows` — line 197
- `mapItem` — line 200
- `mapItem` — line 204
- `filterItem` — line 208
- `serializeTiers` — line 214
- `mapItem` — line 216
- `filterItem` — line 219
- `compareItems` — line 222
- `mapItem` — line 225
- `syncTierDrafts` — line 231
- `updateTierRow` — line 241
- `mapItem` — line 242
- `addTierRow` — line 248
- `removeTierRow` — line 252
- `filterItem` — line 255
- `tierDirty` — line 261
- `tierPreview` — line 266
- `mapItem` — line 268
- `filterItem` — line 271
- `compareItems` — line 274
- `mapItem` — line 280
- `saveTiers` — line 288
- `flashSaved` — line 301
- `onTimeout` — line 303
- `toggleSetting` — line 308
- `saveSetting` — line 314
- `onRejected` — line 325
- `handleTextSubmit` — line 344
- `listValues` — line 348
- `addListItem` — line 357
- `removeListItem` — line 371
- `filterItem` — line 374
- `labelFor` — line 380
- `onMountCallback` — line 384
- `handleClick` — line 398
- `handleInput` — line 501
- `handleInput` — line 515
- `handleClick` — line 527
- `handleClick` — line 549
- `handleClick` — line 558
- `handleClick` — line 588
- `handleSubmit` — line 602
- `handleClick` — line 623
- `handleChange` — line 636
- `handleSubmit` — line 648
- `handleSubmit` — line 667

## `src/webui/pages/Health.svelte` (6)

- `loadHealth` — line 15
- `loadPrices` — line 27
- `onTimeout` — line 37
- `onTimeout` — line 48
- `onMountCallback` — line 57
- `anonymousFn` — line 62

## `src/webui/pages/Logs.svelte` (27)

- `getLevelClass` — line 34
- `fetchLogs` — line 38
- `fetchComponents` — line 67
- `refetch` — line 79
- `handleLevelToggle` — line 84
- `filterItem` — line 86
- `handleComponentChange` — line 95
- `handleClearFilters` — line 99
- `handlePage` — line 107
- `toggleExpanded` — line 112
- `formatMetadata` — line 121
- `exportPage` — line 131
- `mapLog` — line 141
- `mapItem` — line 143
- `downloadBlob` — line 154
- `matchesFilters` — line 166
- `handleNewLog` — line 181
- `onMountCallback` — line 189
- `subscribeCallback` — line 194
- `someLog` — line 197
- `anonymousFn` — line 208
- `handleKeydown` — line 236
- `handleClick` — line 245
- `handleClick` — line 259
- `handleClick` — line 300
- `handleClick` — line 307
- `handleClick` — line 342

## `src/webui/pages/Moderation.svelte` (40)

- `fetchModerationEnabled` — line 22
- `toggleModerationEnabled` — line 33
- `fetchBans` — line 52
- `openBanModal` — line 67
- `closeBanModal` — line 74
- `handleBanUserSearchInput` — line 78
- `onTimeout` — line 84
- `pickBanUser` — line 98
- `submitBan` — line 105
- `unbanUserRow` — line 138
- `switchTab` — line 152
- `showStatus` — line 183
- `onTimeout` — line 186
- `fetchR2Users` — line 191
- `filterItem` — line 207
- `fetchR2Media` — line 215
- `resetSelectionState` — line 245
- `handleUserSelect` — line 249
- `findItem` — line 259
- `handleFileTypeFilter` — line 268
- `handlePage` — line 274
- `toggleFileSelection` — line 281
- `toggleSelectAll` — line 290
- `mapItem` — line 295
- `refreshAfterDelete` — line 303
- `findItem` — line 306
- `deleteFile` — line 311
- `bulkDelete` — line 334
- `deleteAllForUser` — line 381
- `onMountCallback` — line 407
- `anonymousFn` — line 409
- `handleClick` — line 423
- `handleClick` — line 431
- `handleClick` — line 480
- `handleKeydown` — line 496
- `handleClick` — line 511
- `handleClick` — line 531
- `handleClick` — line 582
- `handleChange` — line 672
- `handleClick` — line 698

## `src/webui/pages/Requests.svelte` (29)

- `debouncedFetch` — line 47
- `onTimeout` — line 49
- `applyFilters` — line 55
- `readStateFromUrl` — line 65
- `writeStateToUrl` — line 90
- `formatTimestamp` — line 117
- `toggleExpanded` — line 140
- `loadTrace` — line 150
- `getErrorTypeLabel` — line 171
- `replaceMatch` — line 173
- `formatDuration` — line 178
- `formatFileSize` — line 185
- `truncateUrl` — line 192
- `fetchRequests` — line 198
- `forEachItem` — line 216
- `forEachItem` — line 222
- `handlePrevPage` — line 291
- `handleNextPage` — line 298
- `toggleStatus` — line 305
- `toggleType` — line 315
- `clearFilters` — line 325
- `getDisplayInput` — line 348
- `onMountCallback` — line 358
- `subscribeCallback` — line 366
- `onTimeout` — line 372
- `anonymousFn` — line 378
- `handleChange` — line 416
- `handleChange` — line 435
- `handleClick` — line 593

## `src/webui/pages/Sources.svelte` (27)

- `load` — line 23
- `parseIds` — line 40
- `persist` — line 51
- `onRejected` — line 61
- `toggle` — line 76
- `setCategory` — line 85
- `setAll` — line 96
- `mapItem` — line 100
- `filterItem` — line 110
- `someItem` — line 111
- `mapItem` — line 117
- `filterItem` — line 122
- `someItem` — line 123
- `mapItem` — line 127
- `matches` — line 133
- `inCategory` — line 136
- `filterItem` — line 137
- `handleClick` — line 173
- `handleClick` — line 181
- `filterItem` — line 193
- `filterItem` — line 196
- `handleClick` — line 208
- `mapItem` — line 210
- `handleClick` — line 221
- `mapItem` — line 223
- `handleClick` — line 238
- `someItem` — line 254

## `src/webui/pages/Stats.svelte` (3)

- `loadStats` — line 9
- `onMountCallback` — line 21
- `anonymousFn` — line 24

## `src/webui/pages/UserProfile.svelte` (25)

- `fetchUserProfile` — line 33
- `fetchUserOperations` — line 64
- `onRejected` — line 74
- `fetchUserMedia` — line 95
- `onRejected` — line 105
- `handleMediaPrevPage` — line 126
- `handleMediaNextPage` — line 133
- `handleOperationsPrevPage` — line 140
- `handleOperationsNextPage` — line 147
- `truncateUrl` — line 154
- `formatBytes` — line 160
- `formatTimestamp` — line 168
- `formatRelativeTime` — line 174
- `calculateSuccessRate` — line 199
- `goBack` — line 204
- `fetchOperationTrace` — line 208
- `filterLog` — line 227
- `formatMetadata` — line 241
- `onMountCallback` — line 246
- `subscribeCallback` — line 250
- `subscribeCallback` — line 260
- `filterOp` — line 263
- `anonymousFn` — line 274
- `handleClick` — line 398
- `filterLog` — line 521

## `src/webui/pages/Users.svelte` (30)

- `fetchUsers` — line 18
- `handleSearch` — line 44
- `handleSort` — line 49
- `handlePrevPage` — line 60
- `handleNextPage` — line 67
- `viewUserProfile` — line 74
- `formatBytes` — line 78
- `calculateSuccessRate` — line 86
- `handleUserMetricsUpdate` — line 92
- `findIndexItem` — line 94
- `compareItems` — line 105
- `compareItems` — line 141
- `onMountCallback` — line 159
- `subscribeCallback` — line 164
- `forEachMetrics` — line 167
- `anonymousFn` — line 173
- `compareItems` — line 179
- `filterItem` — line 184
- `compareItems` — line 187
- `filterItem` — line 192
- `compareItems` — line 195
- `accumulateSum` — line 210
- `accumulateSum` — line 220
- `handleKeydown` — line 276
- `handleClick` — line 299
- `handleClick` — line 308
- `handleClick` — line 317
- `handleClick` — line 326
- `handleClick` — line 336
- `handleClick` — line 358

## `src/webui/stores/sse-store.js` (26)

- `updateHealthMetrics` — line 48
- `startHealthMonitoring` — line 63
- `onInterval` — line 68
- `onInterval` — line 80
- `stopHealthMonitoring` — line 98
- `connect` — line 112
- `anonymousFn` — line 134
- `handleHeartbeat` — line 148
- `anonymousFn` — line 153
- `anonymousFn` — line 166
- `handleMessage` — line 197
- `updateCallback` — line 206
- `findIndexOp` — line 207
- `updateCallback` — line 223
- `updateCallback` — line 230
- `updateCallback` — line 237
- `scheduleReconnect` — line 262
- `onTimeout` — line 285
- `disconnect` — line 302
- `handleOnline` — line 325
- `updateCallback` — line 328
- `handleOffline` — line 339
- `updateCallback` — line 342
- `useSse` — line 352
- `anonymousFn` — line 369
- `reconnect` — line 384

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

## `src/webui/utils/router.js` (9)

- `sanitizePropertyKey` — line 17
- `parseHash` — line 23
- `forEachParam` — line 39
- `initRouter` — line 53
- `handleHashchange` — line 55
- `navigate` — line 66
- `mapKey` — line 79
- `isActivePage` — line 90
- `derivedCallback` — line 91

## `test/ban-check.test.js` (7)

- `setupAll` — line 8
- `makeInteraction` — line 12
- `describeReplyIfBanned` — line 25
- `testDoesNothingWhenModerationIsDisabled` — line 26
- `testLetsANonBannedUserThrough` — line 42
- `testBlocksABannedUserAndReplies` — line 53
- `testOmitsTheAppealLineWhenAppeal` — line 77

## `test/commands/convert.test.js` (39)

- `describeConvertCommandParameterConversion` — line 4
- `convertTimeParameters` — line 9
- `testConvertsBothStartTimeAndEnd` — line 36
- `testConvertsOnlyStartTimeForVideo` — line 43
- `testConvertsOnlyEndTimeForVideo` — line 50
- `testReturnsNullForBothWhenNeither` — line 57
- `testIgnoresTimeParametersForImages` — line 64
- `testIgnoresTimeParametersForImagesEven` — line 71
- `testIgnoresTimeParametersForImagesEven` — line 78
- `testHandlesZeroStartTimeWithEnd` — line 85
- `testCalculatesCorrectDurationForDecimalValues` — line 92
- `describeTimeParameterValidation` — line 99
- `validateTimeParameters` — line 104
- `testValidatesThatEndTimeIsGreater` — line 116
- `testValidatesThatEndTimeCannotEqual` — line 122
- `testAllowsValidTimeRange` — line 128
- `testAllowsOnlyStartTimeNoValidation` — line 133
- `testAllowsOnlyEndTimeNoValidation` — line 138
- `testAllowsNeitherParameterNoValidationNeeded` — line 143
- `testValidatesDecimalValuesCorrectly` — line 148
- `describeDurationValidationAgainstVideoLength` — line 157
- `validateDurationAgainstVideoLength` — line 162
- `testValidatesThatRequestedTimeframeDoesNot` — line 175
- `testAllowsTimeframeThatFitsWithinVideo` — line 181
- `testAllowsTimeframeThatEndsExactlyAt` — line 186
- `testAllowsStartTimeOnlyNoDurationValidation` — line 191
- `testAllowsDurationOnlyNoDurationValidation` — line 196
- `testAllowsNeitherParameterNoDurationValidation` — line 201
- `testValidatesDecimalValuesCorrectly` — line 206
- `testHandlesEdgeCaseWhereStartTimeDuration` — line 214
- `testHandlesEdgeCaseWhereStartTimeDuration` — line 219
- `describeQualityParameterHandling` — line 225
- `getQualityParameter` — line 230
- `testUsesQualityParameterFromCommandWhen` — line 239
- `testUsesDefaultQualityWhenQualityParameter` — line 244
- `testUsesDefaultQualityWhenQualityParameter` — line 249
- `testAcceptsAllValidQualityValuesLow` — line 254
- `testQualityParameterTakesPrecedenceOverDefault` — line 264
- `testEmptyStringQualityParameterUsesDefault` — line 272

## `test/commands/download-e2e.test.js` (24)

- `fakeBuffer` — line 33
- `describeHandleDownloadCommandFullPipelineE2E` — line 46
- `testSkippedRequiresExperimentalTestModuleMocks` — line 47
- `setupAll` — line 52
- `getCobaltMediaUrls` — line 60
- `downloadFromSocialMedia` — line 92
- `getYtdlpSite` — line 136
- `downloadVideo` — line 208
- `downloadImage` — line 209
- `downloadFileFromUrl` — line 210
- `teardownAll` — line 224
- `cleanStorage` — line 231
- `downloadInteraction` — line 238
- `getNumber` — line 242
- `describeHandleDownloadCommandFullPipelineE2E` — line 247
- `testSingleFileVideoDownloadsSavesAnd` — line 248
- `testMultiFilePickerDownloadsArrayAnd` — line 266
- `mapItem` — line 277
- `everyItem` — line 281
- `testDeletedPostCuratedErrorMessageReaches` — line 288
- `testTurnedOffSourceDownloadIsRefused` — line 303
- `testHybridDeliveryOversizedXTwitterVideo` — line 324
- `testTooLongXTwitterVideoFalls` — line 343
- `testSecondIdenticalDownloadHitsTheFile` — line 361

## `test/commands/download.test.js` (38)

- `describeDownloadCommandParameterConversion` — line 4
- `convertTimeParameters` — line 9
- `testConvertsBothStartTimeAndEnd` — line 30
- `testConvertsOnlyStartTimeEndTime` — line 37
- `testConvertsOnlyEndTimeStartTime` — line 44
- `testReturnsNullForBothWhenNeither` — line 51
- `testHandlesZeroStartTimeWithEnd` — line 58
- `testCalculatesCorrectDurationForDecimalValues` — line 65
- `testHandlesLargeTimeValues` — line 72
- `testHandlesFractionalSecondsCorrectly` — line 79
- `testHandlesEndTimeEqualToStart` — line 86
- `testHandlesMultipleConversionCallsIndependently` — line 95
- `describeTimeParameterValidation` — line 108
- `validateTimeParameters` — line 113
- `testValidatesThatEndTimeIsGreater` — line 125
- `testValidatesThatEndTimeCannotEqual` — line 131
- `testAllowsValidTimeRange` — line 137
- `testAllowsOnlyStartTimeNoValidation` — line 142
- `testAllowsOnlyEndTimeNoValidation` — line 147
- `testAllowsNeitherParameterNoValidationNeeded` — line 152
- `testValidatesDecimalValuesCorrectly` — line 157
- `describeTrimmingIntegrationLogic` — line 166
- `shouldTrimFile` — line 171
- `testDeterminesGIFShouldBeTrimmedWhen` — line 190
- `testDeterminesGIFShouldBeTrimmedWhen` — line 194
- `testDeterminesGIFShouldNotBeTrimmed` — line 198
- `testDeterminesVideoWithGifExtensionShould` — line 202
- `testDeterminesRegularVideoShouldBeTrimmed` — line 206
- `testDeterminesRegularVideoShouldBeTrimmed` — line 210
- `testDeterminesVideoShouldNotBeTrimmed` — line 214
- `describeTrimmedVideoFileExtensionLogic` — line 219
- `getTrimmedVideoExtension` — line 224
- `testReturnsMp4ExtensionForTrimmedVideo` — line 232
- `testReturnsOriginalExtensionForNonTrimmed` — line 239
- `describeHashRegenerationAfterTrimming` — line 246
- `shouldRegenerateHash` — line 252
- `testDeterminesHashShouldBeRegeneratedAfter` — line 257
- `testDeterminesHashShouldNotBeRegenerated` — line 261

## `test/commands/run-media-command.test.js` (19)

- `describeRunMediaCommandDiscordLifecycleE2E` — line 15
- `testSuccessTheCallbackReplyIsSent` — line 16
- `runMediaCommandCallback` — line 22
- `testSuccessWithAnAttachmentWrapperLeaves` — line 35
- `runMediaCommandCallback` — line 41
- `testAppErrorTheCuratedUserFacingMessage` — line 54
- `runMediaCommandCallback` — line 60
- `testCuratedNetworkErrorEGDeletedPost` — line 73
- `runMediaCommandCallback` — line 79
- `testUnexpectedErrorTheGenericFallbackIs` — line 88
- `runMediaCommandCallback` — line 95
- `testTempFilesRegisteredOnCtxAre` — line 109
- `runMediaCommandCallback` — line 120
- `rejectsCallback` — line 127
- `testTempFilesAreCleanedUpEven` — line 135
- `runMediaCommandCallback` — line 146
- `rejectsCallback` — line 153
- `testCtxExposesTheExpectedHelpersTo` — line 161
- `runMediaCommandCallback` — line 168

## `test/commands/shared/buffer-validation.test.js` (28)

- `gif89a` — line 14
- `gif87a` — line 15
- `mp4` — line 16
- `webm` — line 18
- `setupAll` — line 22
- `teardownAll` — line 25
- `describeSharedBufferValidation` — line 29
- `describeValidateGifBuffer` — line 30
- `testAcceptsGIF89aAndGIF87a` — line 31
- `testRejectsNonGIFSignature` — line 35
- `throwsCallback` — line 36
- `testRejectsEmptyTooSmallBuffer` — line 40
- `throwsCallback` — line 41
- `throwsCallback` — line 44
- `describeValidateVideoBuffer` — line 50
- `testAcceptsMP4FtypAtOffset4` — line 51
- `testRejectsUnknownSignature` — line 55
- `throwsCallback` — line 56
- `testRejectsEmptyTooSmallBuffer` — line 60
- `throwsCallback` — line 61
- `throwsCallback` — line 64
- `describeWriteValidatedFileBuffer` — line 70
- `testWritesAValidGif` — line 71
- `testWritesAValidVideo` — line 77
- `testWritesImagesWithoutSignatureValidation` — line 82
- `testRejectsAnInvalidGifBeforeWriting` — line 87
- `rejectsCallback` — line 89
- `rejectsCallback` — line 92

## `test/commands/shared/command-errors.test.js` (4)

- `describeSharedCommandErrorsCuratedErrorMessage` — line 8
- `testReturnsTheMessageForAppErrorSubclasses` — line 9
- `testReturnsTheFallbackForPlainUnexpected` — line 24
- `testReturnsTheFallbackForAnAppError` — line 35

## `test/commands/shared/message-adapter.test.js` (12)

- `makeFakeMessage` — line 9
- `describeCreateMessageAdapter` — line 35
- `testExposesMessageIdentityFieldsAndThe` — line 36
- `testDeferReplySendsAPlaceholderAndMarks` — line 49
- `testEditReplyEditsTheDeferredPlaceholderMessage` — line 60
- `testAFilesOnlyEditReplyClearsThe` — line 72
- `testEditReplyBeforeAnyReplyDeferThrows` — line 82
- `rejectsCallback` — line 86
- `testReplyStripsInteractionOnlyFlagsAnd` — line 91
- `testReplyThenEditReplyEditsTheReply` — line 103
- `testFollowUpSendsAnAdditionalMessage` — line 114
- `testOptionGettersCoerceValuesAndReturn` — line 125

## `test/commands/shared/url-cache.test.js` (8)

- `describeSharedUrlCache` — line 9
- `describeTrackR2UploadIfApplicable` — line 10
- `testIsANoOpForNull` — line 11
- `doesNotRejectCallback` — line 12
- `doesNotRejectCallback` — line 15
- `doesNotRejectCallback` — line 18
- `describeRecordProcessedUrl` — line 24
- `testRoundTripsARecordRetrievableVia` — line 25

## `test/docker-security.test.js` (76)

- `parseDockerCompose` — line 15
- `checkDockerSocketAccess` — line 154
- `escapeShellArg` — line 164
- `describeDockerSecurityTests` — line 171
- `setupAll` — line 174
- `describeDockerSocketExposure` — line 182
- `testAppServiceShouldNotMountDocker` — line 183
- `testWatchtowerServiceDockerSocketMountIs` — line 204
- `testWebuiServiceShouldNotMountDocker` — line 218
- `testCobaltServiceShouldNotMountDocker` — line 230
- `describeVolumeMountSecurity` — line 243
- `testVolumeMountsShouldUseAbsolutePaths` — line 244
- `testNoVolumeMountsToSensitiveHost` — line 268
- `somePattern` — line 304
- `filterItem` — line 324
- `testDockerSocketMountShouldBeRead` — line 353
- `describeNetworkExposure` — line 377
- `testPortsShouldBeBoundToLocalhost` — line 378
- `testWebuiPortExposureIsIntentional` — line 405
- `someItem` — line 410
- `describePrivilegeEscalation` — line 423
- `testNoServicesShouldRunInPrivileged` — line 424
- `testServicesShouldUseReadOnlyRoot` — line 443
- `testServicesShouldNotRunAsRoot` — line 466
- `describeEnvironmentVariableSecurity` — line 489
- `testSensitiveEnvironmentVariablesShouldNotBe` — line 490
- `testEnvironmentVariablesShouldUseVariableSubstitution` — line 515
- `filterItem` — line 542
- `describeCommandInjectionPrevention` — line 554
- `testShellArgumentEscapingFunctionPreventsCommand` — line 555
- `testShellMetacharacterValidationRejectsDangerousCharacters` — line 587
- `testGifOptimizerAvoidsShellExecutionEntirely` — line 606
- `describeContainerIsolation` — line 629
- `testServicesShouldNotShareNetworkNamespace` — line 630
- `describeImageSecurity` — line 648
- `testImagesShouldUseSpecificTagsNot` — line 649
- `testExternalImagesShouldBeFromTrusted` — line 665
- `mapItem` — line 671
- `describeRuntimeSecurityChecks` — line 700
- `testDockerSocketShouldNotBeWorld` — line 701
- `testContainerShouldNotBeAbleTo` — line 724
- `describeResourceLimitsAndExhaustionPrevention` — line 741
- `testServicesShouldHaveMemoryLimitsTo` — line 742
- `testServicesShouldHaveCPULimitsTo` — line 777
- `testServicesShouldHaveRestartPoliciesTo` — line 811
- `filterItem` — line 820
- `describeCapabilityRestrictions` — line 831
- `testServicesShouldDropDangerousCapabilities` — line 832
- `testServicesShouldDropALLCapabilitiesAnd` — line 875
- `describeHostNamespaceIsolation` — line 909
- `testServicesShouldNotUseHostPID` — line 910
- `testServicesShouldNotUseHostIPC` — line 924
- `testServicesShouldNotMountHostProc` — line 938
- `testServicesShouldNotMountHostSys` — line 960
- `describeVolumeMountPathTraversal` — line 983
- `testVolumeMountsShouldNotContainPath` — line 984
- `testVolumeMountsShouldNotMountEntire` — line 1010
- `describeDockerApiSecurity` — line 1034
- `testAppSourceShouldNotInvokeThe` — line 1035
- `testDockerRunCommandsShouldNotUse` — line 1056
- `testDockerExecCommandsShouldUseUser` — line 1080
- `describeContainerEscapePrevention` — line 1106
- `testServicesShouldNotMountDockerSocket` — line 1107
- `testAppServiceDockerSocketAccessShould` — line 1133
- `describeHealthCheckSecurity` — line 1150
- `testHealthChecksShouldNotExposeSensitive` — line 1151
- `testHealthCheckCommandsShouldBeSafe` — line 1181
- `describeNetworkSecurity` — line 1201
- `testServicesShouldUseInternalNetworksWhen` — line 1202
- `testServicesShouldNotExposePortsUnnecessarily` — line 1220
- `describeFileSystemSecurity` — line 1243
- `testTemporaryDirectoriesShouldBeMountedWith` — line 1244
- `testVolumeMountsShouldUseAppropriateMount` — line 1259
- `glob` — line 1279
- `walkDir` — line 1283
- `convertGlobToRegex` — line 1306

## `test/handlers/prefix-commands.test.js` (44)

- `makeMessage` — line 16
- `mapItem` — line 26
- `anonymousFn` — line 30
- `makeDeps` — line 57
- `trackUser` — line 68
- `isAdmin` — line 69
- `replyIfBanned` — line 70
- `replyIfMaintenance` — line 71
- `getGuildPrefix` — line 72
- `setGuildPrefix` — line 73
- `handleStatsCommand` — line 79
- `describeMatchPrefix` — line 86
- `testMatchesTheConfiguredPrefix` — line 87
- `testMatchesAMentionOfTheBot` — line 92
- `testIgnoresMentionsOfOtherUsersAnd` — line 99
- `describeParseArgTokens` — line 105
- `testFirstBareTokenBecomesUrlKey` — line 106
- `testUnknownKeysAndExtraBareTokens` — line 125
- `testUrlsContainingStayIntactAsThe` — line 130
- `testInvalidQualityValuesAreDroppedSo` — line 138
- `testLossyIsClampedToThe0` — line 143
- `describeIsValidPrefix` — line 150
- `testAcceptsShortPrintablePrefixes` — line 151
- `testRejectsLongSpacedOrDiscordSpecial` — line 157
- `describeHandlePrefixMessage` — line 164
- `testIgnoresMessagesFromBotsAndWebhooks` — line 165
- `testDispatchesGDownloadWithTheUrl` — line 172
- `testUsesTheGuildPrefixOverrideInstead` — line 185
- `testPassesBotStartTimeThroughToTheStats` — line 194
- `testAttachesMessageAttachmentsAsTheFile` — line 201
- `testBareMentionRepliesWithTheHelp` — line 213
- `testUnknownCommandIsSilentForPrefix` — line 223
- `testBannedUsersAreBlockedBeforeDispatch` — line 236
- `testBanAndMaintenanceChecksAlsoGate` — line 242
- `replyIfMaintenance` — line 254
- `testPrefixSetRequiresManageServerPermission` — line 260
- `testPrefixSetStoresAValidPrefix` — line 270
- `testPrefixResetClearsTheGuildOverride` — line 280
- `testPrefixSetRejectsInvalidPrefixes` — line 289
- `testPrefixWithNoArgsShowsThe` — line 299
- `testPrefixCannotBeChangedInDMs` — line 309
- `testBarePrefixQueryStillWorksIn` — line 319
- `describeBuildHelpEmbed` — line 329
- `testShowsTheEffectivePrefixInUsage` — line 330

## `test/helpers/fake-interaction.js` (10)

- `createFakeInteraction` — line 16
- `toCollection` — line 21
- `mapIt` — line 23
- `anonymousFn` — line 27
- `makeMessage` — line 33
- `fetch` — line 45
- `reply` — line 48
- `editReply` — line 53
- `deferReply` — line 57
- `followUp` — line 62

## `test/scripts/docker-copy-webui.test.js` (22)

- `setupEach` — line 16
- `anonymousFn` — line 22
- `teardownEach` — line 33
- `describeDockerCopyWebuiJsWrapperScript` — line 37
- `describePlatformDetection` — line 38
- `testDetectsWindowsPlatformCorrectly` — line 39
- `testPlatformReturnsValidPlatformString` — line 44
- `describeWindowsPathExecution` — line 52
- `testConstructsCorrectPowerShellCommandForWindows` — line 53
- `testUsesCorrectOptionsForWindowsExecution` — line 65
- `describeUnixPathExecution` — line 76
- `testConstructsCorrectBashCommandForUnix` — line 77
- `testUsesCorrectOptionsForUnixExecution` — line 89
- `describeErrorHandling` — line 100
- `testExitsWithCode1OnWindows` — line 101
- `testExitsWithCode1OnUnix` — line 118
- `describeScriptPathResolution` — line 136
- `testResolvesScriptDirectoryCorrectly` — line 137
- `testConstructsCorrectScriptPaths` — line 143
- `describeCrossPlatformCompatibility` — line 155
- `testHandlesBothWindowsAndUnixPlatforms` — line 156
- `testUsesAppropriateScriptExtensionPerPlatform` — line 167

## `test/scripts/docker-verify.test.js` (22)

- `setupEach` — line 16
- `anonymousFn` — line 22
- `teardownEach` — line 33
- `describeDockerVerifyJsWrapperScript` — line 37
- `describePlatformDetection` — line 38
- `testDetectsWindowsPlatformCorrectly` — line 39
- `testPlatformReturnsValidPlatformString` — line 45
- `describeWindowsPathExecution` — line 53
- `testConstructsCorrectPowerShellCommandForWindows` — line 54
- `testUsesCorrectOptionsForWindowsExecution` — line 67
- `describeUnixPathExecution` — line 78
- `testConstructsCorrectBashCommandForUnix` — line 79
- `testUsesCorrectOptionsForUnixExecution` — line 92
- `describeErrorHandling` — line 103
- `testExitsWithCode1OnWindows` — line 104
- `testExitsWithCode1OnUnix` — line 121
- `describeScriptPathResolution` — line 139
- `testResolvesScriptDirectoryCorrectly` — line 140
- `testConstructsCorrectScriptPaths` — line 146
- `describeCrossPlatformCompatibility` — line 159
- `testHandlesBothWindowsAndUnixPlatforms` — line 160
- `testUsesAppropriateScriptExtensionPerPlatform` — line 172

## `test/scripts/fetch-code-scanning-issues.test.js` (33)

- `describeFetchCodeScanningIssuesJs` — line 12
- `describeGitHubCLIAvailabilityCheck` — line 13
- `testChecksForGhCLIAvailability` — line 14
- `testExitsWhenGhCLIIsNot` — line 23
- `describeAPIEndpointConstruction` — line 33
- `testConstructsCorrectAPIEndpoint` — line 34
- `testConstructsEndpointWithQueryParameters` — line 42
- `testUsesCorrectPaginationParameters` — line 52
- `describePaginationHandling` — line 58
- `testHandlesSinglePageOfResults` — line 59
- `testHandlesMultiplePagesOfResults` — line 68
- `testStopsPaginationOn404` — line 91
- `describeJSONParsing` — line 102
- `testParsesValidJSONResponse` — line 103
- `testHandlesInvalidJSONGracefully` — line 112
- `testValidatesResponseIsAnArray` — line 123
- `describeAlertFiltering` — line 132
- `testFiltersToOnlyOpenAlerts` — line 133
- `filterAlert` — line 141
- `everyAlert` — line 147
- `testHandlesEmptyAlertsArray` — line 153
- `filterAlert` — line 155
- `describeFileWriting` — line 163
- `testConstructsCorrectOutputFilePath` — line 164
- `testFormatsJSONWithIndentation` — line 172
- `describeErrorHandling` — line 181
- `testHandles404RepositoryNotFound` — line 182
- `testHandles401AuthenticationFailed` — line 189
- `testHandles403Forbidden` — line 196
- `testHandlesGenericErrors` — line 203
- `describeAlertSummaryFormatting` — line 212
- `testFormatsAlertSummaryCorrectly` — line 213
- `testHandlesMissingAlertFieldsGracefully` — line 231

## `test/scripts/serve-site-security.test.js` (31)

- `describeServeSiteSecurity` — line 15
- `setupAll` — line 19
- `teardownAll` — line 35
- `describeValidatePathFunction` — line 42
- `validatePath` — line 44
- `testAllowsValidPathsWithinSiteDir` — line 63
- `testPreventsPathTraversalWith` — line 78
- `testPreventsPathTraversalWith` — line 83
- `testPreventsPathTraversalWithEncoded` — line 97
- `testPreventsAbsolutePathsOutsideSiteDir` — line 113
- `testRemovesQueryStringFromPath` — line 131
- `testRemovesHashFromPath` — line 142
- `testNormalizesPathSeparators` — line 153
- `testPreventsNullByteInjection` — line 167
- `testAllowsSubdirectoryPaths` — line 184
- `testPreventsMultipleSequences` — line 195
- `testPreventsMixedPathSeparatorsWithTraversal` — line 200
- `describeXSSPreventionIn404Pages` — line 213
- `testEscapeHtmlEscapesScriptTags` — line 214
- `testEscapeHtmlEscapesHTMLEntities` — line 221
- `testEscapeHtmlEscapesQuotes` — line 229
- `testEscapeHtmlEscapesAmpersands` — line 235
- `testEscapeHtmlHandlesNormalText` — line 241
- `testEscapeHtmlHandlesComplexXSSPayload` — line 247
- `describePathValidationIntegration` — line 256
- `findFile` — line 258
- `validatePath` — line 265
- `testFindFilePreventsPathTraversal` — line 299
- `testFindFileAllowsValidFiles` — line 304
- `testFindFileValidatesIndexHtmlPaths` — line 314
- `testFindFilePreventsTraversalInDirectoryResolution` — line 325

## `test/utils/attachment-helpers.test.js` (17)

- `createAttachment` — line 12
- `testValidateVideoAttachmentAcceptsValidVideoFormats` — line 19
- `testValidateVideoAttachmentRejectsUnsupportedContentTypes` — line 27
- `testValidateVideoAttachmentRejectsAttachmentsWithoutContentType` — line 37
- `testValidateVideoAttachmentRejectsFilesExceedingSizeLimit` — line 44
- `testValidateVideoAttachmentAcceptsFilesAtSizeLimit` — line 55
- `testValidateVideoAttachmentAllowsOversizedFilesForAdmins` — line 62
- `testValidateVideoAttachmentAcceptsSmallFiles` — line 70
- `testValidateImageAttachmentAcceptsValidImageFormats` — line 77
- `testValidateImageAttachmentRejectsUnsupportedContentTypes` — line 85
- `testValidateImageAttachmentRejectsAttachmentsWithoutContentType` — line 95
- `testValidateImageAttachmentRejectsFilesExceedingSizeLimit` — line 102
- `testValidateImageAttachmentAcceptsFilesAtSizeLimit` — line 113
- `testValidateImageAttachmentAllowsOversizedFilesForAdmins` — line 121
- `testValidateImageAttachmentAcceptsSmallFiles` — line 130
- `testValidateVideoAttachmentHandlesZeroSizeFiles` — line 137
- `testValidateImageAttachmentHandlesZeroSizeFiles` — line 144

## `test/utils/booru.test.js` (5)

- `describeBooruUtilities` — line 5
- `testIsBooruUrlRecognizesDanbooruPostURLs` — line 6
- `testIsBooruUrlRecognizesE621E926PostURLs` — line 12
- `testIsBooruUrlRejectsNonPostPagesOn` — line 19
- `testIsBooruUrlRejectsOtherHostsAndLookalikes` — line 26

## `test/utils/cobalt-picker.test.js` (11)

- `describeCobaltPickerFunctionality` — line 5
- `testShouldHandlePickerResponseWithBoth` — line 6
- `filterItem` — line 33
- `testShouldCalculateTotalSizeCorrectlyFor` — line 40
- `accumulateSum` — line 47
- `testShouldUseDiscordAttachmentsWhenTotal` — line 56
- `accumulateSum` — line 63
- `testShouldHandlePickerWithOnlyVideos` — line 72
- `filterItem` — line 81
- `testShouldHandlePickerWithOnlyPhotos` — line 87
- `filterItem` — line 96

## `test/utils/cobalt-queue.test.js` (15)

- `setupAll` — line 6
- `teardownAll` — line 11
- `describeCobaltQueueUtilities` — line 16
- `testHashUrlGeneratesConsistentHashForSame` — line 17
- `testHashUrlGeneratesDifferentHashesForDifferent` — line 27
- `testHashUrlHandlesURLsWithQueryParameters` — line 36
- `testHashUrlGeneratesValidHexHash` — line 49
- `describeQueueCobaltRequestWithProcessedURLs` — line 57
- `testReturnsCachedURLWhenURLAlready` — line 58
- `downloadFn` — line 91
- `testProceedsWithDownloadWhenURLNot` — line 114
- `downloadFn` — line 134
- `testHandlesConcurrentRequestsForSameUnprocessed` — line 150
- `downloadFn` — line 158
- `promiseExecutor` — line 160

## `test/utils/cobalt.test.js` (13)

- `describeCobaltUtilities` — line 5
- `testIsSocialMediaUrlRecognizesXComURLs` — line 6
- `testNormalizeSocialMediaUrlForCobaltStripsXShareParamsFrom` — line 10
- `testNormalizeSocialMediaUrlForCobaltPreservesNonTrackingParams` — line 17
- `testIsSocialMediaUrlRecognizesEmbedFixerMirrorURLs` — line 36
- `testNormalizeSocialMediaUrlForCobaltRewritesXMirrorStatusURLs` — line 51
- `testNormalizeSocialMediaUrlForCobaltRewritesMirrorHostsEvenFor` — line 65
- `testNormalizeSocialMediaUrlForCobaltRewritesFxbskyAppToBsky` — line 72
- `testIsSocialMediaUrlRejectsPinterestURLsIntentionallyUnsupported` — line 79
- `testIsSocialMediaUrlRecognizesTwitchClipURLs` — line 88
- `testIsSocialMediaUrlRecognizesAdditionalCobaltPlatforms` — line 96
- `testIsSocialMediaUrlRejectsRemovedUnsupportedThreadsURLs` — line 106
- `testNormalizeSocialMediaUrlForCobaltLeavesUnrelatedURLsUnchanged` — line 110

## `test/utils/config.test.js` (9)

- `describeGIFQUALITYConfiguration` — line 6
- `setupAll` — line 7
- `testBotConfigGifQualityReturnsAValue` — line 17
- `testDefaultValueIsMediumWhenGIF` — line 27
- `testValidQualityValuesAreLowMedium` — line 34
- `testInvalidValuesShouldBeRejectedBy` — line 43
- `testCaseInsensitiveNormalizationWorksCorrectly` — line 56
- `testConfigurationErrorIsProperlyDefinedForInvalid` — line 75
- `testGifQualityValueMatchesExpectedFormat` — line 83

## `test/utils/database.test.js` (49)

- `setupAll` — line 20
- `teardownAll` — line 30
- `describeDatabaseUtilities` — line 35
- `describeInitDatabase` — line 36
- `testInitializesDatabaseSuccessfully` — line 37
- `testCanBeCalledMultipleTimesSafely` — line 42
- `describeInsertOrUpdateUser` — line 49
- `testInsertsNewUser` — line 50
- `testUpdatesExistingUser` — line 80
- `testHandlesInvalidUserIdGracefully` — line 112
- `doesNotRejectCallback` — line 113
- `describeGetUser` — line 121
- `testReturnsUserForExistingUserId` — line 122
- `testReturnsNullForNonExistentUser` — line 136
- `describeGetUniqueUserCount` — line 142
- `testCountGrowsWhenNewUsersAre` — line 143
- `testReturns0ForEmptyDatabase` — line 160
- `describeInsertLog` — line 169
- `testInsertsLogEntry` — line 170
- `testInsertsLogWithMetadata` — line 188
- `testHandlesAllLogLevels` — line 206
- `testHandlesNullVsUndefinedMetadata` — line 228
- `describeGetLogs` — line 251
- `testReturnsAllLogsWhenNoFilters` — line 252
- `testFiltersByComponent` — line 258
- `forEachLog` — line 273
- `forEachLog` — line 277
- `testFiltersByLevel` — line 282
- `forEachLog` — line 292
- `forEachLog` — line 296
- `testFiltersByTimeRange` — line 301
- `forEachLog` — line 316
- `testRespectsLimit` — line 322
- `testOrdersByTimestampDescendingByDefault` — line 336
- `testOrdersByTimestampAscendingWhenSpecified` — line 351
- `testRespectsOffsetParameterForPagination` — line 366
- `testFiltersWithCombinedComponentLevelAnd` — line 388
- `forEachLog` — line 412
- `describeGetProcessedUrl` — line 421
- `testReturnsNullForNonExistentURL` — line 422
- `testReturnsProcessedURLRecordWhenExists` — line 428
- `testHandlesMissingDatabaseGracefully` — line 458
- `describeInsertProcessedUrl` — line 466
- `testInsertsNewProcessedURLRecord` — line 467
- `testUpdatesExistingProcessedURLRecord` — line 500
- `testHandlesNullUserId` — line 526
- `testHandlesDifferentFileTypes` — line 542
- `testHandlesR2URLsCorrectly` — line 574
- `testHandlesMissingDatabaseGracefully` — line 591

## `test/utils/discord-cdn.test.js` (22)

- `describeDiscordCdnUtilities` — line 9
- `describeIsDiscordCdnUrl` — line 10
- `testDetectsMainCDNDomains` — line 11
- `testDetectsSubdomainCDNDomains` — line 22
- `testReturnsFalseForNonDiscordDomains` — line 33
- `testReturnsFalseForInvalidURLs` — line 39
- `testHandlesHttpProtocolNonHTTPS` — line 45
- `testHandlesURLsWithPathsAndQuery` — line 60
- `describeIsAttachmentExpired` — line 72
- `testReturnsTrueForURLsWithoutExpiry` — line 73
- `testReturnsTrueForURLsWithInvalid` — line 84
- `testReturnsTrueForExpiredAttachments` — line 97
- `testReturnsFalseForValidFutureExpiry` — line 106
- `testReturnsTrueForURLsExpiringExactly` — line 115
- `testHandlesURLsWithMultipleQueryParameters` — line 125
- `testReturnsTrueForInvalidURLFormat` — line 133
- `testHandlesHexTimestampWithUppercaseLetters` — line 138
- `testReturnsTrueForExpiryParameterWith` — line 146
- `describeGetRequestHeaders` — line 168
- `testReturnsCorrectHeadersStructure` — line 169
- `testUserAgentContainsExpectedBrowserIdentifiers` — line 179
- `testReturnsNewObjectEachCall` — line 188

## `test/utils/download-services.test.js` (11)

- `describeDownloadServicesRegistry` — line 12
- `testServiceIdsAreUniqueAndNon` — line 13
- `mapItem` — line 14
- `everyId` — line 19
- `testEveryYtDlpSiteHasA` — line 26
- `testGetServiceForUrlMapsRepresentativeURLsAcrossCategories` — line 33
- `testGetServiceForUrlReturnsNullForUnknownAnd` — line 45
- `describeGetDisabledServiceLabelGating` — line 52
- `setupAll` — line 53
- `teardownAll` — line 56
- `testReturnsTheLabelOnlyForA` — line 60

## `test/utils/file-downloader.test.js` (24)

- `describeFileDownloaderUtilities` — line 6
- `describeGenerateHash` — line 7
- `testGeneratesAStable64HexContent` — line 8
- `testProducesConsistentHashes` — line 16
- `testProducesDifferentHashesForDifferentContent` — line 24
- `testHandlesEmptyBuffer` — line 34
- `testHandlesBinaryData` — line 42
- `describeParseTenorUrl` — line 51
- `testExtractsGIFURLFromStoreCache` — line 52
- `anonymousFn` — line 58
- `testExtractsGIFURLFromOgImage` — line 88
- `anonymousFn` — line 93
- `testFallsBackToDirectURLPattern` — line 107
- `anonymousFn` — line 112
- `testFallsBackToDirectURLPattern` — line 126
- `anonymousFn` — line 131
- `testExtractsGIFURLFromJSONLD` — line 143
- `anonymousFn` — line 148
- `testThrowsErrorForInvalidTenorURL` — line 164
- `rejectsCallback` — line 168
- `testHandlesTenorURLWithWwwPrefix` — line 178
- `anonymousFn` — line 183
- `testHandlesCaseInsensitiveURLMatching` — line 197
- `anonymousFn` — line 202

## `test/utils/gif-optimizer.test.js` (27)

- `describeGifOptimizerUtilities` — line 10
- `describeIsGifFile` — line 11
- `testDetectsGIFFromExtension` — line 12
- `testDetectsGIFFromContentType` — line 18
- `testReturnsFalseForNonGIFFiles` — line 24
- `testReturnsTrueIfEitherExtensionOr` — line 32
- `describeExtractHashFromCdnUrl` — line 38
- `testExtractsHashFromCdnGronkaDev` — line 39
- `testExtractsHashFromOtherGronkaDev` — line 45
- `testExtractsHashFromCdnGronkaDev` — line 51
- `testHandlesURLsWithQueryParameters` — line 57
- `testHandlesURLsWithFragments` — line 63
- `testReturnsNullForNonCdnDomains` — line 69
- `testReturnsNullForInvalidPathPattern` — line 78
- `testReturnsNullForInvalidURLFormat` — line 85
- `testHandlesCaseInsensitiveHash` — line 90
- `describeCalculateSizeReduction` — line 97
- `testCalculatesCorrectReductionPercentage` — line 98
- `testReturnsNegativeForFileGrowth` — line 105
- `testHandlesZeroOriginalSize` — line 110
- `testRoundsToNearestInteger` — line 115
- `describeFormatSizeMb` — line 122
- `testFormatsBytesToMB` — line 123
- `testHandlesZeroBytes` — line 129
- `testHandlesSmallSizes` — line 133
- `testHandlesLargeSizes` — line 138
- `testRoundsToOneDecimalPlace` — line 143

## `test/utils/guild-prefixes.test.js` (8)

- `setupAll` — line 11
- `uniqueGuildId` — line 16
- `describeGuildPrefixes` — line 18
- `testReturnsNullForAGuildWithout` — line 19
- `testSetGetRoundtrip` — line 23
- `testSettingAgainOverwritesThePreviousPrefix` — line 29
- `testClearRemovesTheOverride` — line 36
- `testWritesInvalidateTheCacheSoReads` — line 43

## `test/utils/hentaigifz.test.js` (9)

- `describeHentaigifzUtilities` — line 5
- `testIsHentaiGifzUrlRecognizesPostURLs` — line 6
- `testIsHentaiGifzUrlRejectsOtherHostsAndThe` — line 12
- `testExtractMediaUrlPrefersTheJSONLDImageObject` — line 20
- `testExtractMediaUrlFallsBackToTheSingle` — line 37
- `testExtractMediaUrlFallsBackToOgImage` — line 46
- `testExtractMediaUrlIgnoresMediaOnForeignHosts` — line 51
- `testExtractMediaUrlDecodesHTMLEntitiesInScraped` — line 61
- `testExtractMediaUrlReturnsNullWhenThereIs` — line 66

## `test/utils/interaction-helpers.test.js` (39)

- `describeInteractionHelpers` — line 10
- `describeSafeInteractionReply` — line 11
- `testReturnsFalseWhenInteractionAlreadyReplied` — line 12
- `reply` — line 16
- `testReturnsFalseWhenInteractionAlreadyDeferred` — line 23
- `reply` — line 27
- `testHandlesExpiredInteractionErrorCode10062` — line 34
- `reply` — line 38
- `testHandlesAlreadyAcknowledgedErrorCode40060` — line 49
- `reply` — line 53
- `testReturnsTrueOnSuccessfulReply` — line 64
- `reply` — line 68
- `describeSafeInteractionEditReply` — line 76
- `testReturnsFalseWhenInteractionNotYet` — line 77
- `editReply` — line 81
- `testReturnsMessageOnSuccessfulEditWhen` — line 88
- `editReply` — line 93
- `testReturnsMessageOnSuccessfulEditWhen` — line 100
- `editReply` — line 105
- `testHandlesExpiredInteractionErrorCode10062` — line 112
- `editReply` — line 116
- `testHandlesAlreadyAcknowledgedErrorCode40060` — line 127
- `editReply` — line 131
- `describeSafeInteractionDeferReply` — line 143
- `testReturnsFalseWhenInteractionAlreadyReplied` — line 144
- `deferReply` — line 148
- `testReturnsFalseWhenInteractionAlreadyDeferred` — line 155
- `deferReply` — line 159
- `testHandlesExpiredInteractionErrorCode10062` — line 166
- `deferReply` — line 170
- `testReturnsTrueOnSuccessfulDefer` — line 181
- `deferReply` — line 185
- `describeSafeInteractionFollowUp` — line 193
- `testReturnsFalseWhenInteractionNotYet` — line 194
- `followUp` — line 198
- `testReturnsMessageOnSuccessfulFollowUp` — line 205
- `followUp` — line 210
- `testHandlesExpiredInteractionErrorCode10062` — line 217
- `followUp` — line 221

## `test/utils/logger-sanitization.test.js` (24)

- `setupAll` — line 6
- `teardownAll` — line 10
- `describeLoggerSanitization` — line 15
- `describeSanitizeLogInput` — line 16
- `testRemovesANSIEscapeCodes` — line 17
- `testRemovesNewlines` — line 25
- `testRemovesCarriageReturns` — line 33
- `testRemovesTabs` — line 41
- `testRemovesAllControlCharacters` — line 49
- `testRemovesComplexANSIEscapeSequences` — line 60
- `testTrimsWhitespace` — line 68
- `testHandlesNullInput` — line 75
- `testHandlesUndefinedInput` — line 81
- `testHandlesNonStringInput` — line 87
- `testHandlesEmptyString` — line 94
- `testPreventsLogInjectionWithNewline` — line 100
- `promiseExecutor` — line 105
- `testPreventsLogInjectionWithANSICodes` — line 120
- `promiseExecutor` — line 125
- `testSanitizesLogMessagesInFormatMessage` — line 137
- `testSanitizesArgumentsInFormatMessage` — line 148
- `testSanitizesObjectArgumentsInFormatMessage` — line 161
- `testSanitizesInAllLogMethods` — line 174
- `promiseExecutor` — line 183

## `test/utils/logger.test.js` (29)

- `setupAll` — line 10
- `teardownAll` — line 16
- `describeLoggerUtilities` — line 21
- `describeFormatTimestampSeconds` — line 22
- `testFormatsTimestampCorrectly` — line 23
- `testUsesCurrentDateWhenNoArgument` — line 31
- `describeCreateLogger` — line 38
- `testCreatesLoggerWithComponentName` — line 39
- `testLoggerWritesToDatabase` — line 48
- `promiseExecutor` — line 57
- `testLoggerRespectsLogLevel` — line 69
- `promiseExecutor` — line 79
- `filterLog` — line 84
- `filterLog` — line 87
- `filterLog` — line 90
- `testLoggerHandlesMultipleArguments` — line 102
- `promiseExecutor` — line 109
- `testLoggerHandlesObjectArguments` — line 120
- `promiseExecutor` — line 128
- `testDifferentComponentsWriteToSameDatabase` — line 140
- `promiseExecutor` — line 150
- `testLoggerSanitizesLogMessagesBeforeWriting` — line 163
- `promiseExecutor` — line 170
- `testLoggerSanitizesControlCharactersInLog` — line 185
- `promiseExecutor` — line 192
- `testLoggerSanitizesANSIEscapeCodesIn` — line 209
- `promiseExecutor` — line 216
- `testLoggerSanitizesArgumentsInLogMessages` — line 228
- `promiseExecutor` — line 235

## `test/utils/operations-tracker.test.js` (75)

- `setupAll` — line 17
- `teardownAll` — line 21
- `describeOperationsTracker` — line 29
- `setupEach` — line 30
- `describeCreateOperation` — line 36
- `testCreatesOperationWithBasicParameters` — line 37
- `testCreatesOperationWithURLContext` — line 58
- `testCreatesOperationWithAttachmentContext` — line 69
- `testCreatesOperationWithCommandOptions` — line 85
- `testCreatesUniqueOperationIDs` — line 100
- `testLimitsInMemoryOperationsToMAX` — line 107
- `testCreatesOperationsWithDifferentTypes` — line 119
- `mapType` — line 121
- `forEachId` — line 125
- `describeUpdateOperationStatus` — line 132
- `testUpdatesOperationStatusFromPendingTo` — line 133
- `testUpdatesOperationStatusToSuccess` — line 142
- `testUpdatesOperationStatusToErrorWith` — line 153
- `promiseExecutor` — line 158
- `testUpdatesOperationStatusWithStackTrace` — line 170
- `testCalculatesDurationOnCompletion` — line 179
- `promiseExecutor` — line 184
- `testHandlesNonExistentOperationGracefully` — line 204
- `doesNotThrowCallback` — line 205
- `testUpdatesFileSize` — line 210
- `describeLogOperationStep` — line 219
- `testLogsOperationStepWithStatus` — line 220
- `testLogsOperationStepWithMetadata` — line 232
- `findItem` — line 238
- `testTracksFilePathsInOperation` — line 245
- `testDoesNotDuplicateFilePaths` — line 254
- `filterItem` — line 261
- `testCalculatesStepDurationFromStartTime` — line 267
- `promiseExecutor` — line 274
- `testHandlesNonExistentOperationGracefully` — line 296
- `doesNotThrowCallback` — line 297
- `testBroadcastsUpdateOnErrorStatus` — line 302
- `setBroadcastCallbackCallback` — line 305
- `describeLogOperationError` — line 316
- `testLogsErrorWithErrorObject` — line 317
- `testLogsErrorWithStringMessage` — line 327
- `testLogsErrorWithAdditionalData` — line 336
- `testHandlesNonExistentOperationGracefully` — line 346
- `doesNotThrowCallback` — line 347
- `testBroadcastsUpdateWhenErrorIsLogged` — line 352
- `setBroadcastCallbackCallback` — line 355
- `describeGetOperation` — line 367
- `testReturnsOperationByID` — line 368
- `testReturnsNullForNonExistentOperation` — line 376
- `describeGetRecentOperations` — line 382
- `testReturnsAllOperationsWhenNoLimit` — line 383
- `testReturnsLimitedNumberOfOperations` — line 392
- `testReturnsOperationsInReverseChronologicalOrder` — line 401
- `promiseExecutor` — line 403
- `describeSetBroadcastCallback` — line 414
- `testSetsBroadcastCallbackAndCallsIt` — line 415
- `setBroadcastCallbackCallback` — line 419
- `testSupportsMultipleInstancePorts` — line 430
- `setBroadcastCallbackCallback` — line 439
- `setBroadcastCallbackCallback` — line 443
- `describeSetUserMetricsBroadcastCallback` — line 462
- `testSetsUserMetricsBroadcastCallback` — line 463
- `setUserMetricsBroadcastCallbackCallback` — line 464
- `promiseExecutor` — line 473
- `describeCleanupStuckOperations` — line 483
- `testReturns0WhenNoStuckOperations` — line 484
- `testMarksStuckOperationsAsFailed` — line 494
- `testSendsDMNotificationWhenClientProvided` — line 516
- `fetch` — line 519
- `send` — line 521
- `testHandlesDMFailureGracefully` — line 536
- `fetch` — line 539
- `describeOperationLifecycle` — line 550
- `testCompleteOperationLifecycleFromCreationTo` — line 551
- `testOperationLifecycleWithError` — line 580

## `test/utils/race-conditions.test.js` (25)

- `setupAll` — line 21
- `teardownAll` — line 31
- `describeRaceConditions` — line 37
- `describeConcurrentFileOperations` — line 38
- `testConcurrentSaveGifOperationsShouldHandleRace` — line 39
- `fromCallback` — line 44
- `filterItem` — line 52
- `findItem` — line 58
- `testConcurrentSaveVideoOperationsShouldHandleRace` — line 64
- `fromCallback` — line 70
- `filterItem` — line 78
- `testConcurrentSaveImageOperationsShouldHandleRace` — line 84
- `fromCallback` — line 90
- `filterItem` — line 98
- `describeConcurrentURLRequests` — line 105
- `testConcurrentRequestsForSameURLShould` — line 106
- `downloadFn` — line 110
- `promiseExecutor` — line 112
- `fromCallback` — line 123
- `filterItem` — line 131
- `testConcurrentRequestsForDifferentURLsShould` — line 141
- `downloadFn` — line 145
- `promiseExecutor` — line 147
- `fromCallback` — line 158
- `filterItem` — line 166

## `test/utils/rate-limit.test.js` (14)

- `describeRateLimitUtilities` — line 10
- `describeIsAdmin` — line 11
- `testReturnsTrueForConfiguredAdminUsers` — line 12
- `mapId` — line 17
- `testReturnsFalseForNonAdminUsers` — line 29
- `describeCheckRateLimit` — line 37
- `testReturnsFalseForFirstRequest` — line 38
- `testReturnsTrueWhenRateLimited` — line 44
- `testAdminsBypassRateLimiting` — line 55
- `mapId` — line 59
- `testDifferentUsersHaveSeparateRateLimits` — line 76
- `testResetsAfterCooldownPeriod` — line 93
- `promiseExecutor` — line 119
- `promiseExecutor` — line 130

## `test/utils/storage.test.js` (36)

- `setupAll` — line 35
- `teardownAll` — line 46
- `testDetectFileTypeDetectsGIFFromExtension` — line 53
- `testDetectFileTypeDetectsVideoFromExtension` — line 58
- `testDetectFileTypeDetectsImageFromExtension` — line 66
- `testDetectFileTypeUsesContentTypeWhenExtension` — line 73
- `testDetectFileTypePrioritizesContentTypeOverExtension` — line 79
- `testDetectFileTypeDefaultsToVideoForUnknown` — line 88
- `testGetGifPathGeneratesCorrectPathForGIF` — line 94
- `testGetGifPathSanitizesHashToAlphanumericOnly` — line 102
- `testGetVideoPathGeneratesCorrectPathForVideo` — line 108
- `testGetVideoPathSanitizesHashAndExtension` — line 116
- `testGetVideoPathHandlesExtensionWithOrWithout` — line 122
- `testGetImagePathGeneratesCorrectPathForImage` — line 129
- `testGetImagePathSanitizesHashAndExtension` — line 137
- `testFormatFileSizeFormatsBytesToMB` — line 143
- `testFormatFileSizeFormatsLargeSizesToGB` — line 149
- `testFormatFileSizeHandlesZeroBytes` — line 155
- `testGifExistsReturnsFalseForNonExistent` — line 159
- `testGifExistsReturnsTrueForExistingGIF` — line 164
- `testSaveGifSavesGIFFileAndReturns` — line 176
- `testSaveGifCreatesDirectoryIfItDoes` — line 190
- `testVideoExistsReturnsFalseForNonExistent` — line 200
- `testVideoExistsReturnsTrueForExistingVideo` — line 205
- `testSaveVideoSavesVideoFileAndReturns` — line 216
- `testImageExistsReturnsFalseForNonExistent` — line 230
- `testImageExistsReturnsTrueForExistingImage` — line 235
- `testSaveImageSavesImageFileAndReturns` — line 246
- `testCleanupTempFilesDeletesExistingFiles` — line 260
- `testCleanupTempFilesHandlesNonExistentFilesGracefully` — line 285
- `testCleanupTempFilesHandlesEmptyArray` — line 291
- `testGetStorageStatsReturnsZeroStatsForEmpty` — line 296
- `testGetStorageStatsCountsFilesCorrectly` — line 320
- `testGetStorageStatsCalculatesFormattedSizesCorrectly` — line 346
- `testGetStorageStatsHandlesMissingDirectoriesGracefully` — line 363
- `testGetStorageStatsOnlyCountsValidFileTypes` — line 371

## `test/utils/user-tracking.test.js` (23)

- `setupAll` — line 13
- `teardownAll` — line 20
- `describeUserTrackingUtilities` — line 25
- `describeTrackUser` — line 26
- `testTracksNewUserWithUsername` — line 27
- `testTracksUserWithoutUsernameUsesDefault` — line 58
- `testUpdatesExistingUserLastUsed` — line 69
- `promiseExecutor` — line 79
- `testUpdatesUsernameIfChanged` — line 90
- `testHandlesInvalidUserIdGracefully` — line 104
- `doesNotRejectCallback` — line 105
- `describeGetUniqueUserCount` — line 113
- `testCountGrowsWhenNewUsersAre` — line 114
- `testTrackingAnExistingUserIsIdempotent` — line 132
- `describeInitializeUserTracking` — line 155
- `testCanBeCalledMultipleTimesSafely` — line 156
- `describeTrackRecentConversion` — line 163
- `testTracksRecentConversion` — line 164
- `testKeepsOnlyLast10Conversions` — line 175
- `testMovesExistingConversionToFront` — line 189
- `testReturnsEmptyArrayForNonExistent` — line 209
- `testHandlesInvalidInputGracefully` — line 214
- `doesNotThrowCallback` — line 215

## `test/utils/validation.test.js` (41)

- `setupAll` — line 18
- `teardownAll` — line 26
- `describeValidationUtilities` — line 34
- `describeValidateUrl` — line 35
- `testValidHttpsURLs` — line 36
- `testValidHttpURLs` — line 42
- `testRejectsNonHttpProtocols` — line 47
- `testRejectsLocalhost` — line 54
- `testRejects127001` — line 60
- `testRejectsPrivateIPRanges` — line 66
- `testRejectsInvalidURLFormat` — line 73
- `testHandlesIPv6Addresses` — line 79
- `testHandlesURLsWithPortNumbers` — line 96
- `describeSanitizeFilename` — line 115
- `testRemovesPathSeparators` — line 116
- `testRemovesDangerousCharacters` — line 122
- `testRemovesLeadingDotsAndSpaces` — line 127
- `testLimitsLength` — line 133
- `testHandlesInvalidInput` — line 140
- `testPreservesValidFilenames` — line 148
- `describeValidateFileExtension` — line 154
- `testAcceptsValidExtensions` — line 155
- `testRejectsInvalidExtensions` — line 162
- `testHandlesMissingFilename` — line 168
- `describeValidateFilename` — line 174
- `testAcceptsValidFilenames` — line 175
- `testSanitizesPathTraversalAttempts` — line 182
- `testSanitizesDangerousCharacters` — line 206
- `testLimitsLength` — line 212
- `testRejectsInvalidInput` — line 219
- `testEnsuresPathStaysWithinStorageDirectory` — line 227
- `describeParseTimestamp` — line 234
- `testParsesPlainSeconds` — line 235
- `testParsesMMSSTimestamps` — line 241
- `testParsesHHMMSSTimestamps` — line 248
- `testAllowsMinutesOver59WhenNo` — line 254
- `testTrimsSurroundingWhitespace` — line 258
- `testRejectsSecondsMinutesSegmentsOf60` — line 262
- `testRejectsMalformedInput` — line 268
- `testRejectsEmptyAndNonStringInput` — line 280
- `testIncludesTheBadValueInThe` — line 288

## `test/utils/video-processor-validation.test.js` (63)

- `validateNumericParameter` — line 6
- `describeVideoProcessorValidation` — line 29
- `describeValidateNumericParameter` — line 30
- `describeTypeConfusionPrevention` — line 31
- `testAcceptsValidNumbers` — line 32
- `testConvertsStringNumbersToNumbers` — line 39
- `testRejectsNullWhenAllowNullIsFalse` — line 46
- `throwsCallback` — line 47
- `testRejectsUndefinedWhenAllowNullIsFalse` — line 52
- `throwsCallback` — line 53
- `testAllowsNullWhenAllowNullIsTrue` — line 58
- `testRejectsNonNumericStrings` — line 62
- `throwsCallback` — line 63
- `throwsCallback` — line 66
- `testRejectsObjects` — line 73
- `throwsCallback` — line 75
- `testRejectsArrays` — line 82
- `throwsCallback` — line 83
- `testRejectsFunctions` — line 88
- `throwsCallback` — line 89
- `validateNumericParameterCallback` — line 90
- `testHandlesBooleanValuesCoercedToNumbers` — line 96
- `describeNaNAndInfinityHandling` — line 103
- `testRejectsNaN` — line 104
- `throwsCallback` — line 105
- `throwsCallback` — line 108
- `testRejectsInfinity` — line 113
- `throwsCallback` — line 114
- `throwsCallback` — line 117
- `throwsCallback` — line 120
- `testRejectsStringNaN` — line 125
- `throwsCallback` — line 126
- `testRejectsStringInfinity` — line 131
- `throwsCallback` — line 132
- `describeMinMaxBoundsValidation` — line 138
- `testEnforcesMinimumValue` — line 139
- `throwsCallback` — line 140
- `testEnforcesMaximumValue` — line 147
- `throwsCallback` — line 148
- `testEnforcesBothMinAndMax` — line 155
- `throwsCallback` — line 156
- `throwsCallback` — line 159
- `testHandlesNegativeMinValues` — line 165
- `throwsCallback` — line 166
- `testHandlesInfinityAsMaxDefault` — line 173
- `testHandlesZeroAsMinDefault` — line 181
- `throwsCallback` — line 182
- `describeEdgeCases` — line 189
- `testHandlesZeroCorrectly` — line 190
- `testHandlesNegativeNumbers` — line 196
- `testHandlesDecimalNumbers` — line 201
- `testHandlesScientificNotationStrings` — line 207
- `testErrorMessagesIncludeParameterName` — line 212
- `describeTypeConfusionAttackPrevention` — line 229
- `testPreventsTypeConfusionWithStringCoercion` — line 230
- `throwsCallback` — line 232
- `testHandlesObjectWithValueOfCoercedTo` — line 237
- `valueOf` — line 239
- `toString` — line 240
- `testHandlesArrayCoercionSingleElementConverts` — line 246
- `throwsCallback` — line 250
- `testValidatesActualNumericTypeNotJust` — line 255
- `throwsCallback` — line 257

## `test/utils/video-processor.test.js` (64)

- `setupAll` — line 14
- `teardownAll` — line 21
- `createDummyVideoFile` — line 29
- `testConvertToGifValidatesWidthParameter` — line 37
- `rejectsCallback` — line 43
- `rejectsCallback` — line 53
- `rejectsCallback` — line 63
- `testConvertToGifValidatesFpsParameter` — line 90
- `rejectsCallback` — line 96
- `rejectsCallback` — line 106
- `rejectsCallback` — line 116
- `rejectsCallback` — line 126
- `testConvertToGifValidatesStartTimeParameter` — line 135
- `rejectsCallback` — line 141
- `testConvertToGifValidatesDurationParameter` — line 169
- `rejectsCallback` — line 175
- `rejectsCallback` — line 185
- `testConvertToGifValidatesQualityParameter` — line 205
- `rejectsCallback` — line 211
- `testConvertToGifUsesDefaultValues` — line 230
- `testConvertToGifValidatesInputFileExists` — line 246
- `rejectsCallback` — line 251
- `testConvertToGifHandlesStringNumbersForNumeric` — line 260
- `testConvertToGifHandlesInfinityValues` — line 276
- `rejectsCallback` — line 282
- `rejectsCallback` — line 291
- `testTrimVideoValidatesStartTimeParameter` — line 302
- `rejectsCallback` — line 308
- `testTrimVideoValidatesDurationParameter` — line 328
- `rejectsCallback` — line 334
- `rejectsCallback` — line 344
- `testTrimVideoRequiresAtLeastOneTime` — line 364
- `rejectsCallback` — line 370
- `rejectsCallback` — line 380
- `testTrimVideoValidatesInputFileExists` — line 410
- `rejectsCallback` — line 415
- `testTrimVideoValidatesNumericParametersAreValid` — line 424
- `rejectsCallback` — line 430
- `rejectsCallback` — line 440
- `rejectsCallback` — line 450
- `rejectsCallback` — line 460
- `testTrimVideoHandlesValidTimeParameterCombinations` — line 469
- `testTrimVideoHandlesStringNumbersForNumeric` — line 512
- `testTrimVideoValidatesMinimumDurationBoundary` — line 528
- `rejectsCallback` — line 545
- `testTrimGifValidatesStartTimeParameter` — line 556
- `rejectsCallback` — line 562
- `testTrimGifValidatesDurationParameter` — line 582
- `rejectsCallback` — line 588
- `rejectsCallback` — line 598
- `testTrimGifRequiresAtLeastOneTime` — line 618
- `rejectsCallback` — line 624
- `rejectsCallback` — line 634
- `testTrimGifValidatesInputFileExists` — line 664
- `rejectsCallback` — line 669
- `testTrimGifValidatesNumericParametersAreValid` — line 678
- `rejectsCallback` — line 684
- `rejectsCallback` — line 694
- `rejectsCallback` — line 704
- `rejectsCallback` — line 714
- `testTrimGifHandlesValidTimeParameterCombinations` — line 723
- `testTrimGifHandlesStringNumbersForNumeric` — line 766
- `testTrimGifValidatesMinimumDurationBoundary` — line 782
- `rejectsCallback` — line 799

## `test/utils/webp-detection.test.js` (11)

- `webpHeader` — line 10
- `describeIsAnimatedWebp` — line 21
- `testReturnsTrueForAVP8XHeader` — line 22
- `testReturnsTrueWhenOnlyTheAnimation` — line 27
- `testReturnsFalseForExtendedWebPWithout` — line 31
- `testReturnsFalseForAStaticLossy` — line 36
- `testReturnsFalseForAStaticLossless` — line 40
- `testReturnsFalseForANonWebP` — line 44
- `testReturnsFalseForAPNGSignature` — line 50
- `testReturnsFalseForABufferShorter` — line 57
- `testReturnsFalseForNonBufferInput` — line 61

## `test/utils/ytdlp-queue.test.js` (12)

- `deferred` — line 6
- `promiseExecutor` — line 8
- `describeYtdlpQueueConcurrencySlot` — line 14
- `testNeverRunsMoreThanTheMax` — line 15
- `mapGate` — line 24
- `runInYtdlpSlotCallback` — line 25
- `promiseExecutor` — line 35
- `promiseExecutor` — line 43
- `testReleasesTheSlotEvenWhenThe` — line 60
- `runInYtdlpSlotCallback` — line 62
- `testReturnsTheTaskResult` — line 70
- `runInYtdlpSlotCallback` — line 71

## `test/utils/ytdlp-retry-e2e.test.js` (19)

- `fakeChildProcess` — line 14
- `anonymousFn` — line 18
- `describeYtDlpGenericFailureRetry` — line 23
- `testSkippedRequiresExperimentalTestModuleMocks` — line 24
- `setupAll` — line 36
- `spawn` — line 42
- `onTimeout` — line 49
- `teardownAll` — line 61
- `genericFailure` — line 67
- `rateLimitFailure` — line 72
- `success` — line 77
- `describeYtDlpGenericFailureRetry` — line 85
- `testRetriesOnceAndSucceedsWhenThe` — line 86
- `testDoesNotRetryAConfirmedState` — line 104
- `rejectsCallback` — line 109
- `rejectsCallback` — line 120
- `testGivesUpAfterTheRetryAlso` — line 128
- `rejectsCallback` — line 133
- `rejectsCallback` — line 144

## `test/utils/ytdlp.test.js` (29)

- `describeYtdlpUtilities` — line 11
- `describeIsYouTubeUrl` — line 12
- `testReturnsTrueForStandardYoutubeCom` — line 13
- `testReturnsTrueForYoutuBeShort` — line 19
- `testReturnsTrueForMobileYoutubeURLs` — line 24
- `testReturnsTrueForYoutubeSubdomainURLs` — line 28
- `testReturnsTrueForYoutubeShortsURLs` — line 33
- `testReturnsTrueForYoutubePlaylistURLs` — line 38
- `testReturnsFalseForNonYouTubeURLs` — line 45
- `testReturnsFalseForLookalikeDomains` — line 54
- `testReturnsFalseForInvalidURLs` — line 60
- `testReturnsFalseForNullUndefined` — line 66
- `describeIsRedGifsUrl` — line 72
- `testReturnsTrueForRedgifsWatchIfr` — line 73
- `testReturnsTrueForRedgifsSubdomains` — line 80
- `testReturnsFalseForNonRedgifsURLs` — line 85
- `testReturnsFalseForLookalikeDomains` — line 90
- `testReturnsFalseForInvalidEmptyInput` — line 95
- `describeGetYtdlpSite` — line 103
- `testResolvesEachSupportedYtDlpSite` — line 104
- `testReturnsNullForCobaltSocialAnd` — line 125
- `testReturnsNullForLookalikeDomainsAnd` — line 132
- `describeYtdlpRateLimitError` — line 141
- `testExtendsNetworkError` — line 142
- `testHasCorrectNameProperty` — line 148
- `testStoresMessageCorrectly` — line 153
- `testStoresRetryAfterValue` — line 158
- `testRetryAfterDefaultsToNull` — line 163
- `testCanBeCaughtAsNetworkError` — line 168

## `test/webui-server-bans.test.js` (20)

- `setupAll` — line 9
- `promiseExecutor` — line 13
- `teardownAll` — line 19
- `describeBansDatabase` — line 24
- `testBanUserThenGetBanReturnsTheBan` — line 25
- `testGetBanReturnsNullForAUser` — line 37
- `testBanUserIsAnUpsertReBanning` — line 42
- `testUnbanUserRemovesTheBanAndReturns` — line 53
- `testUnbanUserReturnsFalseWhenTheUser` — line 64
- `testListBansIncludesBannedUsersMostRecent` — line 69
- `promiseExecutor` — line 74
- `findIndexItem` — line 80
- `findIndexItem` — line 83
- `describeBansAPI` — line 92
- `testPOSTApiBansBansAUser` — line 93
- `testPOSTApiBansRequiresUserIdAnd` — line 109
- `testGETApiBansListsBannedUsers` — line 125
- `someItem` — line 134
- `testDELETEApiBansUserIdUnbansA` — line 140
- `testDELETEApiBansUserIdReturns404` — line 151

## `test/webui-server-moderation-alerts.test.js` (13)

- `setupAll` — line 17
- `promiseExecutor` — line 21
- `teardownAll` — line 27
- `describeAlertComponents` — line 32
- `testGetAlertComponentsReturnsDistinctComponentsIncludingNew` — line 33
- `filterItem` — line 52
- `testGETApiAlertsComponentsReturnsThe` — line 60
- `describeR2UserStats` — line 77
- `testGetR2UserStatsAggregatesCountAndSizePer` — line 78
- `findItem` — line 118
- `testGETApiModerationR2UsersReturns` — line 127
- `findItem` — line 148
- `testStatsAreSortedByTotalSize` — line 156

## `test/webui-server-operations.test.js` (33)

- `setupAll` — line 19
- `reconstructOperationFromTrace` — line 31
- `findLog` — line 36
- `filterLog` — line 44
- `compareItems` — line 47
- `findLog` — line 51
- `mapLog` — line 55
- `handleGetApiOperationsByOperationId` — line 82
- `handleGetApiOperationsByOperationId` — line 118
- `promiseExecutor` — line 138
- `listenCallback` — line 139
- `teardownAll` — line 146
- `describeOperationsAPI` — line 157
- `describeGETApiOperationsOperationId` — line 158
- `testReturnsOperationDetails` — line 159
- `testReturns404ForNonExistentOperation` — line 176
- `testReturnsOperationWithTrace` — line 184
- `describeGETApiOperationsOperationIdTrace` — line 200
- `testReturnsOperationTrace` — line 201
- `testReturns404ForNonExistentTrace` — line 216
- `describeSearchOperationsSQLSearchBehindApiRequests` — line 228
- `testFindsAnOperationByExactOperationId` — line 229
- `testFiltersByUrlPatternCaseInsensitiveSubstring` — line 241
- `testSortsOldestFirstWhenRequested` — line 259
- `promiseExecutor` — line 262
- `testSortsByDurationWithUnfinishedOperations` — line 275
- `promiseExecutor` — line 279
- `promiseExecutor` — line 283
- `testFallsBackToNewestFirstFor` — line 298
- `promiseExecutor` — line 301
- `testAppliesPaginationWithAccurateTotal` — line 316
- `mapOp` — line 330
- `forEachOp` — line 334

## `test/webui-server-rate-limit.test.js` (31)

- `describeWebuiServerRateLimiting` — line 6
- `describeFileServerLimiterConfiguration` — line 7
- `testRateLimiterIsConfiguredWithCorrect` — line 8
- `testRateLimiterHasCorrectWindowDuration` — line 22
- `testRateLimiterHasCorrectMaxRequests` — line 27
- `testRateLimiterMessageIsCorrect` — line 32
- `testRateLimiterUsesStandardHeaders` — line 37
- `testRateLimiterDisablesLegacyHeaders` — line 42
- `describeRateLimiterMiddlewareApplication` — line 48
- `setupAll` — line 52
- `testRateLimiterCanBeAppliedAs` — line 63
- `handleGetTest` — line 64
- `testRateLimiterIsAFunctionMiddleware` — line 71
- `describeRateLimitBehavior` — line 76
- `setupAll` — line 81
- `handleGetLimited` — line 92
- `promiseExecutor` — line 96
- `listenCallback` — line 97
- `teardownAll` — line 103
- `testAllowsRequestsWithinLimit` — line 109
- `testBlocksRequestsExceedingLimit` — line 115
- `testRateLimitHeadersArePresent` — line 130
- `describeApiRateLimiterApplication` — line 140
- `setupAll` — line 144
- `promiseExecutor` — line 147
- `listenCallback` — line 148
- `teardownAll` — line 154
- `testApiRoutesPassThroughTheRate` — line 160
- `someName` — line 168
- `describeRateLimiterMessageFormat` — line 175
- `testRateLimitMessageIsLowercaseMonotone` — line 176

## `test/webui-server-settings.test.js` (18)

- `setupAll` — line 10
- `promiseExecutor` — line 14
- `teardownAll` — line 20
- `putSetting` — line 32
- `onRejected` — line 38
- `describeSettingsRoute` — line 44
- `testGETApiSettingsExposesTheKnown` — line 45
- `findItem` — line 73
- `testServicesSettingStoresKnownIdsSorted` — line 79
- `testTiersSettingNormalizesSortsAscendingAnd` — line 95
- `testSelectSettingAcceptsListedOptionsAnd` — line 107
- `testNumberSettingAcceptsAnInRange` — line 118
- `testNumberSettingRejectsNonIntegersAnd` — line 124
- `testListSettingStoresADeduplicatedArray` — line 131
- `testListSettingRejectsNonArraysAnd` — line 141
- `describeDbBackedAdminCache` — line 149
- `testRefreshRateLimitSettingsPicksUpWebuiManagedAdmins` — line 150
- `testRefreshRateLimitSettingsKeepsThePreviousCacheOn` — line 163

## `test/webui-server-sse-handlers.test.js` (11)

- `setupAll` — line 7
- `fakeReqRes` — line 11
- `anonymousFn` — line 14
- `anonymousFn` — line 15
- `anonymousFn` — line 16
- `waitForLogWrite` — line 24
- `promiseExecutor` — line 25
- `describeSSEConnectionErrorLogging` — line 30
- `testBenignDisconnectCodesECONNRESETDoNot` — line 31
- `testEPIPEAndECONNABORTEDAreAlsoTreated` — line 54
- `testAnUnexpectedErrorCodeIsStill` — line 78
