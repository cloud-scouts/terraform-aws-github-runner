# Changelog

## [6.6.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.11...v6.6.0) (2025-07-01)


### Features

* **runner:** support Ubuntu 24.04 ([#4246](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4246)) ([76456b5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/76456b5f625fa36140b7a7e9c1a104b248eeef7f))


### Bug Fixes

* **lambda:** bump @octokit/webhooks from 14.0.2 to 14.1.0 in /lambdas in the octokit group ([#4651](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4651)) ([754ffc8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/754ffc80fd7c70b3260be5d2c9ac88e350325cf9))
* **lambda:** bump the aws group in /lambdas with 6 updates ([#4641](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4641)) ([1955841](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/19558416b8b43080235329eadb2000f8d63555fa))
* **lambda:** bump the aws group in /lambdas with 7 updates ([#4650](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4650)) ([e53710e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e53710ef6d7e20b15e839bcdb7754d47d7ce612f))
* support Terraform AWS Provider v6 ([#4646](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4646)) ([aebef80](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/aebef800ce165fd0df26d774f9c344c1cf02d245))

## [6.5.11](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.10...v6.5.11) (2025-06-24)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 3 updates ([#4632](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4632)) ([59d67f5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/59d67f52d88eac2fd79161dcf02cb3145cddb2cc))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([#4633](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4633)) ([bf91646](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/bf9164643d8a82c381c7043fd17110ab17e5959e))

## [6.5.10](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.9...v6.5.10) (2025-06-23)


### Bug Fixes

* **ami-housekeeper:** don't delete referenced AMIs in default config ([#4623](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4623)) ([d860feb](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d860febe38b52cfd410c5f0e4d668791346cebda))
* **docs:** github artifact attestation command in release notes ([#4624](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4624)) ([ff39d4f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ff39d4f30992f7e37db086ae01c49c9ce233334f))

## [6.5.9](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.8...v6.5.9) (2025-06-17)


### Bug Fixes

* Dynamic set SSM-paramater tier [#4613](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4613) ([#4622](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4622)) ([430c6e8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/430c6e8b62bc06f5daa7690d9e09bc4c359f866e))
* **lambda:** bump the aws group in /lambdas with 6 updates ([ddbe7db](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ddbe7dbd311b2cd296c189403bc24f79718a6477))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([91a06e9](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/91a06e9d8f25b15247fe1c3733ac6d230ab45bf1))

## [6.5.8](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.7...v6.5.8) (2025-06-12)


### Bug Fixes

* scale down log level ([1d32d26](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1d32d262ff67a13b0eab8cb6b4f19fa5f9479324))

## [6.5.7](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.6...v6.5.7) (2025-06-11)


### Bug Fixes

* add comment in terraform code ([d9d6373](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d9d6373b217f8abe7b112c1746c437deae25f569))
* handle enable_on_demand_failover_for_errors default value ([ab8b15f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ab8b15f9f2686a7a0cffe5b9de05432014a01cda))
* **lambda:** bump the aws group across 1 directory with 7 updates ([0558831](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/05588310ee8c409e29b5148930b16b3ea4f4e7d5))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([0219411](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0219411d2b9bc56fad6d6e90fe94de42cc95216e))
* **lambda:** bump the octokit group across 1 directory with 3 updates ([015752a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/015752a93b05a6ceef34f0936202a2f8ea7df35d))
* only tag spot requests if no on-demand fallback ([2a28ef1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2a28ef1bc5aeb0280b92c5f7b6aabf69c1a68b81))

## [6.5.6](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.5...v6.5.6) (2025-05-24)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 6 updates ([e9760c2](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e9760c23ae1ae6daa4c2f28926859698025a148f))
* **lambda:** bump the aws group in /lambdas with 7 updates ([6f2d037](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6f2d0378154f9afbf4868a8031a6db9bae72aa48))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([5748478](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5748478646b8af92417448ee8d0de21b672f4732))
* **lambda:** bump the octokit group across 1 directory with 4 updates ([1d7efd4](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1d7efd4f834869df4e378f8935557e4e6db1bde3))

## [6.5.5](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.4...v6.5.5) (2025-05-09)


### Bug Fixes

* **lambda:** bump @octokit/webhooks in /lambdas in the octokit group ([1b3badf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1b3badf204ff8c949143d257d92573f65f611a29))
* **lambda:** bump the aws group in /lambdas with 6 updates ([9eafc97](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9eafc97c6bf22dc76784dbade8da7b319d732366))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([f732583](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f73258366b59c5806c09ead30a2f4196fa1e7bab))
* **lambda:** bump vite from 6.2.6 to 6.3.5 in /lambdas ([ee69778](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ee697784cd7b686053dd8215476518c266f7aa0d))

## [6.5.4](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.3...v6.5.4) (2025-04-23)


### Bug Fixes

* only tag spot rquests for spot ([a9ab69e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a9ab69e90fe8e1f9df1c752757ef774eed42e278))
* only tag spot rquests for spot ([806bf58](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/806bf580c177c5d2bbdad3b309c48e941b2c6eb4))

## [6.5.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.2...v6.5.3) (2025-04-20)


### Bug Fixes

* **lambdas:** upgrade express 4.21.2 -&gt; 5.1.0 ([10519e9](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/10519e95847edd1e0afd1da4ff007fb22daee521))
* **lambdas:** upgrade middy to 4.7.0 -&gt; 6.1.6 ([7401c75](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7401c755a2ae794224c848706aa01ad5ec154193))

## [6.5.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.1...v6.5.2) (2025-04-19)


### Bug Fixes

* Dispatcher kms permission role mismatch ([#4547](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4547)) ([cae3e74](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/cae3e74ddabc8e65731eca5209144de1df7d3415))

## [6.5.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.5.0...v6.5.1) (2025-04-16)


### Bug Fixes

* added missing launch template tag_specifications ([#4544](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4544)) ([f2eb809](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f2eb80943166680daa204234a2b3bcfab92f07c5))
* **lambda:** bump vite from 6.2.3 to 6.2.6 in /lambdas ([#4542](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4542)) ([dc385cd](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/dc385cdb9b39fadbbf1613bdb16722a697119db6))

## [6.5.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.4.3...v6.5.0) (2025-04-15)


### Features

* migrate launch template to use SSM for AMI lookup ([#4517](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4517)) ([472cc5f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/472cc5f6175d79e26260e0ed7a9cac7fc299411f))


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 6 updates ([#4536](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4536)) ([acfb6c5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/acfb6c5deda8a273e05b7cce36c6ec655dee3f50))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([#4538](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4538)) ([a308819](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a308819b00484006013ae1b3a538a0ecbe1296ce))
* **lambda:** bump the octokit group in /lambdas with 4 updates ([#4537](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4537)) ([94f2c9d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/94f2c9de292200fb8c9d640cc26a759fc91cf0f7))

## [6.4.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.4.2...v6.4.3) (2025-04-08)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 6 updates ([#4525](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4525)) ([e0306f6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e0306f6db7049d118c46672cf46dc9bc24019d16))
* **lambda:** bump the octokit group in /lambdas with 2 updates ([#4527](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4527)) ([a787f1f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a787f1fdd8f327d5d567d2ed6854390593fafff1))

## [6.4.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.4.1...v6.4.2) (2025-03-31)


### Bug Fixes

* **lambda:** bump @octokit/webhooks from 13.7.5 to 13.8.0 in /lambdas in the octokit group ([#4514](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4514)) ([1f1da77](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1f1da77a73ea418d196c01379475570e920ddce6))
* **lambda:** bump the aws group in /lambdas with 3 updates ([#4513](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4513)) ([ecf9a77](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ecf9a7764d9052e76669861032c820fb0d5e7918))

## [6.4.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.4.0...v6.4.1) (2025-03-28)


### Bug Fixes

* **lambda:** bump the aws group across 1 directory with 7 updates ([#4502](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4502)) ([d2ebb3a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d2ebb3a6083004fd8f080696a7369bbb583d629e))
* **lambda:** bump the aws group in /lambdas with 6 updates ([#4495](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4495)) ([9d86451](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9d864517a8e308ceca7246a6dd1620d81fbdb1b4))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([#4507](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4507)) ([f3100e1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f3100e1e36eb98fea7907bb583186d9332fde2b2))
* **lambda:** bump the octokit group in /lambdas with 2 updates ([#4506](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4506)) ([72da9d7](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/72da9d7bfb6b78b83595ec2b455d39772f6dd3b3))
* **lambda:** bump the octokit group in /lambdas with 3 updates ([#4498](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4498)) ([fc2c309](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fc2c309f65d229aa1be0890ff0f407ad5bd7c339))
* **lambda:** bump vite from 6.2.0 to 6.2.3 in /lambdas ([#4504](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4504)) ([5493334](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5493334ab01748be5a29db1e39b686f42b28dfd3))

## [6.4.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.3.2...v6.4.0) (2025-03-18)


### Features

* migrate to ESM and vitest ([#4461](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4461)) ([aa62967](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/aa6296703af4274a9fb85f95a85ec952411bc5db))


### Bug Fixes

* **lambda:** bump cron-parser from 4.9.0 to 5.0.4 in /lambdas ([#4455](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4455)) ([4b446bf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4b446bfc3762010814d9d10510a6ae3cb8cfbd82))

## [6.3.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.3.1...v6.3.2) (2025-03-13)


### Bug Fixes

* add default filter with empty prefix due to changes in AWS Provider 5.90.0 ([1ba9dcc](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1ba9dcc6a8110bbadc00851f3522a96f4c0c8953))
* **lambda:** bump @aws-sdk/client-ec2 in /lambdas in the aws group ([b9238aa](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b9238aa259d4f148d7c25142721af807b1ce1a23))
* **lambda:** bump axios from 1.7.7 to 1.8.3 in /lambdas ([72e6579](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/72e6579dcaa1ef6a9f73e6bc2756eb54bed75023))
* **lambda:** bump axios from 1.7.9 to 1.8.2 in /lambdas ([3068a66](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3068a66c62564b28688dcaefb743e464df216363))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([83ae151](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/83ae1514e708e4ff2ca978202602743731684e78))

## [6.3.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.3.0...v6.3.1) (2025-03-05)


### Bug Fixes

* **lambda:** bump @octokit/rest from 20.1.1 to 20.1.2 in /lambdas in the octokit group ([#4453](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4453)) ([b846daa](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b846daa69b7e9fd81dfa48fe971ee45438f83212))
* **lambda:** bump the aws group in /lambdas with 6 updates ([#4452](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4452)) ([c5ae17c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c5ae17cc1684c2058528011dc70d0ef5184b1e23))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([#4454](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4454)) ([312b1c5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/312b1c5e2601e007c16bc493c43b472758612f4d))

## [6.3.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.2.3...v6.3.0) (2025-02-24)


### Features

* opt-out ssm parameters for github app ([#4335](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4335)) ([a2f013f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a2f013f4352912b618ffc071ef8ea06376ed9c5b))


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 6 updates ([#4440](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4440)) ([b10d87e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b10d87ea40ad57acc0d4711e52be9c8ee7ece177))

## [6.2.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.2.2...v6.2.3) (2025-02-19)


### Bug Fixes

* **lambda:** bump @octokit/request from 8.4.0 to 8.4.1 in /lambdas ([#4431](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4431)) ([945bff1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/945bff1e166e9b3bba1d613e093260f2b13d91fb))
* **lambda:** bump @octokit/request-error from 5.1.0 to 5.1.1 in /lambdas ([#4422](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4422)) ([7ef849e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7ef849ecc52456259bf7dba1805ce75ad4745634))
* **lambda:** bump the aws group in /lambdas with 6 updates ([#4424](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4424)) ([ee80ada](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ee80ada97e2801d9ba360c9ab69352c4bd29d84b))

## [6.2.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.2.1...v6.2.2) (2025-02-11)


### Bug Fixes

* **lambda:** bump @octokit/types from 13.7.0 to 13.8.0 in /lambdas in the octokit group ([#4411](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4411)) ([58e6c6c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/58e6c6c003419cd4d875d41983a254a15ddf36f3))
* **lambda:** bump the aws group in /lambdas with 6 updates ([#4410](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4410)) ([0943afd](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0943afd2511131087bef23c669ce53d81a5984f3))

## [6.2.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.2.0...v6.2.1) (2025-02-05)


### Bug Fixes

* define user agent ([#4394](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4394)) ([95c9b8a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/95c9b8abf918da8671a397c09fca9633ab6d1680))
* **lambda:** bump @octokit/types from 13.7.0 to 13.8.0 in /lambdas in the octokit group ([#4400](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4400)) ([8a14868](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8a14868e360e9c5721ac2ca964f4261887550da7))
* **lambda:** bump the aws group across 1 directory with 6 updates ([#4406](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4406)) ([60c734d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/60c734da01078393ed12c290126a28dc4029b85f))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([#4401](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4401)) ([7793bf1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7793bf17c00acc62736f8ac56a306e3084fa5575))

## [6.2.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.1.3...v6.2.0) (2025-01-29)


### Features

* Support GitHub Enterprise Cloud with Data Residency ([#4367](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4367)) ([e5ebd5f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e5ebd5fbb3fc2899de3a2a7ce6de9014b95ba6ed))
* Support GitHub Enterprise Cloud with Data Residency ([#4390](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4390)) ([02b4a04](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/02b4a04bc45331667a9d8c1177107e46ee336782))


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 7 updates ([#4383](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4383)) ([1b3f8af](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1b3f8af0657eb467f3e1787ad8f55262795f9690))
* Tag event rules, fix broken runner hook examples ([#4378](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4378)) ([6345ec2](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6345ec23580a02a3263c798dc2e0851aff89f328))

## [6.1.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.1.2...v6.1.3) (2025-01-21)


### Bug Fixes

* **lambda:** bump @octokit/types from 13.6.2 to 13.7.0 in /lambdas in the octokit group ([#4370](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4370)) ([cc0f873](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/cc0f8730f61be99cf66871c6b70842a562b984f7))
* **lambda:** bump the aws group in /lambdas with 7 updates ([#4369](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4369)) ([2223525](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/222352514651af52157962d85edc82186eebdfb8))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([#4371](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4371)) ([9f17371](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9f1737145387056910e85120c6c65a3eed487028))

## [6.1.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.1.1...v6.1.2) (2025-01-13)


### Bug Fixes

* **lambda:** bump @octokit/types from 13.6.2 to 13.7.0 in /lambdas in the octokit group ([#4355](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4355)) ([4544228](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4544228406306724be9da955d13b7fb4ae565fa0))
* **lambda:** bump the aws group in /lambdas with 7 updates ([#4354](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4354)) ([c30c5b8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c30c5b88768f4cd2af088db9ab183fb0d76f775c))
* **lambda:** bump typescript from 5.7.2 to 5.7.3 in /lambdas ([#4356](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4356)) ([5a5f58d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5a5f58d4f5650d15b1d1e629b9b3eabb4bd2505f))

## [6.1.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.1.0...v6.1.1) (2025-01-13)


### Bug Fixes

* **ci:** add attestation for lambda artifacts to release ([#4351](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4351)) ([7387ac8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7387ac867c9d581c0306440ffd78c80be0f61d25))

## [6.1.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.0.1...v6.1.0) (2025-01-09)


### Features

* **packer:** Allow passing in an instance_profile to packer ([#4278](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4278)) ([bb7346b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/bb7346bee8340af03a61e85a3cb129da68543612))


### Bug Fixes

* Disable interpolation of HEREDOC strings containing runner hook scripts ([#4333](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4333)) ([2622589](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/26225898b6a55d38f96938c95ba55c7b0319343d))
* **lambda:** bump the aws group in /lambdas with 6 updates ([#4336](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4336)) ([1282e11](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1282e113bcda7fb0433b2a8fb5d5ee86c1c27c6b))

## [6.0.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v6.0.0...v6.0.1) (2025-01-02)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 6 updates ([#4323](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4323)) ([fbac69a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fbac69af8bd95bcd0796d787d7b75b5354a39478))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([#4324](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4324)) ([68cba47](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/68cba476bbc3660b619e162d66ac84dedcd0b754))

## [6.0.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.21.0...v6.0.0) (2024-12-20)


### ⚠ BREAKING CHANGES

* Enable eventbridge by default ([#4320](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4320))
* remove deprecated metric feature flag ([#4319](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4319))
* Upgrade Node to 22 (LTS) ([#4318](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4318))
* remove deprecated variables ([#4073](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4073))
* Remove FIFO queues ([#4072](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4072))
* remove deprecated runners_scale_up_Lambda_memory_size as it breaks CDKTF ([#4276](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4276))

### Features

* Enable eventbridge by default ([#4320](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4320)) ([142bb61](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/142bb61539c00e5fc661725c4fc924c4128484cc))
* Upgrade Node to 22 (LTS) ([#4318](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4318)) ([c5d4693](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c5d4693c7e8889ee9f1672385e26278275d771c2))


### Bug Fixes

* broken docs after removing examples ([#4321](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4321)) ([7171215](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/71712159cd4ad8ae6cb6371e0342b1c6bf663c54))
* remove deprecated metric feature flag ([#4319](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4319)) ([70105b4](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/70105b49d166088bd7f522005b95b40b7ab5b2e4))
* remove deprecated runners_scale_up_Lambda_memory_size as it breaks CDKTF ([#4276](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4276)) ([a2280f7](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a2280f74d45475804de730aeaf903670a3400bd1))
* remove deprecated variables ([#4073](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4073)) ([099c78d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/099c78dc5db0ccf71277b1d4941e05e72336cff8))
* Remove FIFO queues ([#4072](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4072)) ([2f20a8b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2f20a8b9564301346b84eb5baefb22bb313a5408))

## [5.21.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.20.1...v5.21.0) (2024-12-20)


### Features

* Natively support runner pre/post job hooks ([#4263](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4263)) ([259a852](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/259a852d9e1b08f18abe81c9fd80589be9cc7e64))


### Bug Fixes

* Incorrect syncer binary location in tf outputs ([#4274](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4274)) ([401a373](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/401a373684a6b11acd705fe88afee19f3fa84b4c)), closes [#4137](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4137)
* **lambda:** bump @octokit/types from 13.6.1 to 13.6.2 in /lambdas in the octokit group ([#4303](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4303)) ([9f76c4c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9f76c4c7b12814da32310153ae668a657da30458))
* **lambda:** bump axios from 1.7.7 to 1.7.9 in /lambdas ([#4305](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4305)) ([e3cd5b4](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e3cd5b4c5c92ff1107f03f04d691ba8ed214da4d))
* **lambda:** bump the aws group across 1 directory with 7 updates ([#4314](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4314)) ([3f9b768](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3f9b76878987773458fd2d9bb696d1f4d82d5ec2))

## [5.20.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.20.0...v5.20.1) (2024-12-09)


### Bug Fixes

* **lambda:** bump @octokit/types from 13.6.1 to 13.6.2 in /lambdas in the octokit group ([#4291](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4291)) ([d8d7519](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d8d75191eb4573d07ce3ee7f78bfb246b46e1198))
* **lambda:** bump the aws group across 1 directory with 7 updates ([#4288](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4288)) ([039f5db](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/039f5dbeb8af6a02a4686572d8e3377e5048fb3b))
* **lambda:** bump the aws group in /lambdas with 4 updates ([#4290](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4290)) ([eb9c123](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/eb9c123e53c02b332f78c92aedb69b9267810410))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([#4281](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4281)) ([e1f330b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e1f330bb3c8321af875232e23ff1f4d053c684f5))
* **lambda:** bump typescript from 5.6.3 to 5.7.2 in /lambdas ([#4293](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4293)) ([f6e4b92](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f6e4b926e6e73bddb7b0b2f78183d3542f26d023))

## [5.20.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.19.0...v5.20.0) (2024-11-19)


### Features

* **runners:** add support to disable default labels (Linux) ([#3491](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3491)) ([772e1a5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/772e1a59906f171c6dc70183544443509f9c0580))
* **runners:** add support to disable default labels (Windows) ([#4261](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4261)) ([ad9bcc4](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ad9bcc47f8105098811175379b9eed68d73f7d92))


### Bug Fixes

* **lambda:** bump cross-spawn from 7.0.3 to 7.0.6 in /lambdas ([#4273](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4273)) ([dcec236](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/dcec23624b5b0fddc352b9d61cccb18107cc888d))
* **lambda:** bump the aws group in /lambdas with 7 updates ([#4266](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4266)) ([849549e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/849549e8b6497fa7fc8288739669c8daf1223df8))

## [5.19.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.18.4...v5.19.0) (2024-11-12)


### Features

* remove deprecated bata feature workflow job queue ([#4249](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4249)) ([4066c4e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4066c4eefdf778702cf3490336c92a9755581eaf))


### Bug Fixes

* dispatch only queued events to runners ([#4257](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4257)) ([a0a8322](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a0a8322b539edab279a8570507f6f83ec11a290a))
* **lambda:** bump @octokit/auth-app from 6.1.2 to 6.1.3 in /lambdas in the octokit group ([#4252](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4252)) ([25f3538](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/25f3538d59dd76ecea704727c754e0407610f0d3))
* **lambda:** bump the aws group in /lambdas with 7 updates ([#4251](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4251)) ([6a98712](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6a98712fd522c1721c7e094204f1723f11e962d8))

## [5.18.4](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.18.3...v5.18.4) (2024-11-07)


### Bug Fixes

* trigger cold start dispatcher after update SSM parameters ([#4243](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4243)) ([580d24b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/580d24b6be14508d34c201fe764f35d34024ea57))

## [5.18.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.18.2...v5.18.3) (2024-11-05)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 6 updates ([#4235](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4235)) ([ef89b98](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ef89b98ca3494d8dac0a38f7f39a73128e6444af))
* remove unused example spot_instance_termination_watcher ([#4226](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4226)) ([ad865a7](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ad865a7df9393ede2958e53d9ecbb0a61e66053c))

## [5.18.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.18.1...v5.18.2) (2024-10-31)


### Bug Fixes

* **webhook:** add missing permission to workflow job queue (EventBridge) ([#4224](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4224)) ([d7e516c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d7e516c4cc8b3c5091937730935efa716e6481bd))

## [5.18.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.18.0...v5.18.1) (2024-10-29)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 7 updates ([#4211](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4211)) ([d18dcaa](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d18dcaa08801228b0b7d8086962de5fb681dafe3))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([#4212](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4212)) ([9c9219b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9c9219b690c83125a0817f125f499d6155c0cdf1))
* **webhook:** grant KMS permission to decrypt wehn using EventBridge ([#4220](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4220)) ([380bcaf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/380bcaf68447fb05be6c888392b46449cf5d409d))
* **webhook:** result message webhook ([#4221](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4221)) ([8099c17](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8099c1766e4b8d63b950cf6a2c360cf95cdd0dab))

## [5.18.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.17.3...v5.18.0) (2024-10-28)


### Features

* support AWS EventBridge ([#4188](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4188)) ([9607ca6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9607ca65a8b2c9a62936b28e823c6d7865d3ca38))

## [5.17.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.17.2...v5.17.3) (2024-10-23)


### Bug Fixes

* **lambda:** bump the aws group across 1 directory with 5 updates ([#4203](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4203)) ([e12ee80](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e12ee80bb6d1e5b83a8fe092f6364fd2895fd631))
* **lambda:** bump typescript from 5.5.4 to 5.6.3 in /lambdas ([#4200](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4200)) ([cb0c1ff](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/cb0c1fff3c3d771837a635db4f89a1ef68e9cfaf))

## [5.17.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.17.1...v5.17.2) (2024-10-21)


### Bug Fixes

* spot termination watcher output multi runner ([#4194](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4194)) ([367b1b3](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/367b1b38285d63c0cc0fb8a991f69dcbac227222))

## [5.17.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.17.0...v5.17.1) (2024-10-17)


### Bug Fixes

* **lambda:** bump @octokit/types from 13.5.0 to 13.6.1 in /lambdas in the octokit group ([#4183](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4183)) ([f24469f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f24469faac1769e7ab9f1e5d950ab067a4522a1b))
* **lambda:** bump the aws group across 1 directory with 5 updates ([#4191](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4191)) ([bf8a924](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/bf8a92465d580af1503b9038c0f04822d6cd8d0e))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([#4184](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4184)) ([e18ac60](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e18ac600bbad9df67a1ea02a1155044bfb44cef4))

## [5.17.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.16.4...v5.17.0) (2024-10-10)


### Features

* add spot termination handler ([#4176](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4176)) ([8ba0a82](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8ba0a821dd741d863facb86e621f5d8b596e9273))

## [5.16.4](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.16.3...v5.16.4) (2024-10-10)


### Bug Fixes

* missing GHES URL for the retry lambda ([#4177](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4177)) ([3afbd5f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3afbd5fb0952dbb37d7db216f325acf57cc3aa97))

## [5.16.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.16.2...v5.16.3) (2024-10-09)


### Bug Fixes

* **lambda:** bump the aws group across 1 directory with 6 updates ([#4172](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4172)) ([71f4b6e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/71f4b6e19082efec01b057040bdf3b9e26139cc9))
* **lambda:** bump the octokit group in /lambdas with 2 updates ([#4166](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4166)) ([5573c39](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5573c399ad2d5668561abc33ac02d24bc4c6178a))
* support ephemeral runners for windows ([#4164](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4164)) ([44f5d6d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/44f5d6de244f5b23a1992aa36e49e41d605b659b))

## [5.16.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.16.1...v5.16.2) (2024-10-04)


### Bug Fixes

* **lambda:** bump @octokit/types from 13.5.0 to 13.6.0 in /lambdas in the octokit group ([#4154](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4154)) ([825b465](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/825b465daeae53cc319d49b749d994c19057f5a1))
* **lambda:** bump axios from 1.7.5 to 1.7.7 in /lambdas ([#4155](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4155)) ([82a19c1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/82a19c1fcec4c5ddc21bc03dda565ba57fa60388))
* **lambda:** bump the aws group across 1 directory with 6 updates ([#4159](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4159)) ([fb67693](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fb67693a8a71c2013c24cc8b46317e051c66ee8b))
* **lambda:** bump the aws group in /lambdas with 6 updates ([#4146](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4146)) ([43bf911](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/43bf911b486fc585c3de4b61ec6aa47aef48e639))

## [5.16.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.16.0...v5.16.1) (2024-09-21)


### Bug Fixes

* Add missing SG and subnet configuration for Job Retry lambda ([#4114](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4114)) ([7095487](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7095487325d4f63acd246e508e2e997cf13a2249))
* **lambda:** bump @aws-sdk/client-ec2 from 3.637.0 to 3.641.0 in /lambdas in the aws group ([#4106](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4106)) ([20f51a1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/20f51a14f9e95630ac88b29f3fb9b1b41189c864))
* **lambda:** bump @octokit/auth-app from 6.1.1 to 6.1.2 in /lambdas in the octokit group ([#4117](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4117)) ([6e6bd98](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6e6bd98246fd589a1b1187443c6f5ca36f0ba95c))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#4116](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4116)) ([4a8826b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4a8826b5b27db929b3cb4de290fdc989ccab8c69))
* **lambda:** bump the aws group in /lambdas with 6 updates ([#4128](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4128)) ([f6164e7](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f6164e7fb8cfb4776c62e4a1dbea698ba0f2b6d2))
* **lambda:** bump the aws-powertools group in /lambdas with 4 updates ([#4129](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4129)) ([ab2605f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ab2605f92d8dd8e297c3b063e589d17005330b00))

## [5.16.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.15.4...v5.16.0) (2024-08-28)


### Features

* Add metric to track GitHub app rate limit ([#4088](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4088)) ([d7cdaed](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d7cdaed26ec8b57fef058ebace4a3dde725ad0b8))

## [5.15.4](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.15.3...v5.15.4) (2024-08-27)


### Bug Fixes

* add missing prefix to ami cleanur for event rule ([#4098](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4098)) ([1ad118b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1ad118bd516cc29919a2ec9deb9c9362f635f953))
* job retry resource and queue naming ([#4099](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4099)) ([4344f18](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4344f18c4518ac0aa135bbdd8b4af13b34d36d63))
* **lambda:** bump axios from 1.7.2 to 1.7.5 in /lambdas ([#4100](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4100)) ([0f4cd41](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0f4cd419a83b77c47e0bf9923b78f1f61e583955))
* **lambda:** bump axios from 1.7.4 to 1.7.5 in /lambdas ([#4092](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4092)) ([6ed654f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6ed654f8e01f5348260ce0f6e9f8c490469127e2))
* **lambda:** bump micromatch from 4.0.7 to 4.0.8 in /lambdas ([#4096](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4096)) ([d200413](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d2004130668ae88fa28e30378472ab17ab899c87))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#4089](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4089)) ([1405e54](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1405e54adfecb9373af1831a973a92fb2be18998))

## [5.15.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.15.2...v5.15.3) (2024-08-20)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 5 updates ([#4082](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4082)) ([70d7731](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/70d7731642cf8f26031bae9e2f1a45b8ed1555bb))

## [5.15.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.15.1...v5.15.2) (2024-08-19)


### Bug Fixes

* pass lambda zip file to job retry feature ([#4080](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4080)) ([098c0ea](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/098c0ea9ad96d31a2fa944d7eafe90861d8c6184)), closes [#4078](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4078)
* use name instead of name prefix to avoid too long names ([#4079](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4079)) ([8bb6272](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8bb62724c41b6dbd3d3f484f32da9d46dc5ad853))

## [5.15.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.15.0...v5.15.1) (2024-08-16)


### Bug Fixes

* missing lambda s3 key and version for job retry ([#4074](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4074)) ([8540379](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8540379e36dd0e900e777684a55c51da80a5ef1b))

## [5.15.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.14.1...v5.15.0) (2024-08-16)


### Features

* add time zone support for pool schedules ([#4063](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4063)) ([b8f9eb4](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b8f9eb4638efbb45a7e27ddb66b3a10eef2617a7))
* scale up for long waiting jobs (job retry) ([#4064](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4064)) ([6120571](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6120571a959bd672c2bbc77ebf05825185c90bc6))


### Bug Fixes

* **lambda:** bump axios from 1.7.2 to 1.7.4 in /lambdas ([#4071](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4071)) ([2f32195](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2f3219597f3729a2e0b7e464048e3119958b62cd))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#4057](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4057)) ([5ecdbad](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5ecdbaddaf255043057e5427e5f62283b7d59be2))
* **lambda:** bump the aws-powertools group in /lambdas with 3 updates ([#4058](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4058)) ([f9533f3](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f9533f3423a060f232455aacaa8d4967025f6e2c))
* **lambda:** Prevent scale-up lambda from starting runner for user repo if org level runners is enabled ([#3909](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3909)) ([98b1560](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/98b1560f86bb609110bfdbf3607eb19f23beab0e))

## [5.14.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.14.0...v5.14.1) (2024-08-07)


### Bug Fixes

* align inlince policies ([#4046](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4046)) ([7235cdc](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7235cdc40686f3218e1991ec9a8feeb900b719f1)), closes [#4045](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4045)
* **lambda:** bump the aws group in /lambdas with 4 updates ([#4048](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4048)) ([e32b14b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e32b14bc246463d50620c354ce84edc0751623c0))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#4035](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4035)) ([c15c99d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c15c99db84132b11f886f6f8e5291af5e357b41e))
* remove fetch override for octokit and versions ([#4042](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4042)) ([6ac19e6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6ac19e6e4aa3a950d26fcaf496d08fe5508d8992))

## [5.14.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.13.0...v5.14.0) (2024-08-01)


### Features

* mark orphan runners before removing them ([#4001](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4001)) ([6cde62c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6cde62c8c1d6d5eafae01bf9770bd12bb423d779))


### Bug Fixes

* upgrade aws powertools to v2 ([#4027](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4027)) ([900217b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/900217bd81cb5cabcc8c38e12b8fd380315319e8))

## [5.13.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.12.2...v5.13.0) (2024-08-01)


### Features

* **webhook:** Enable authorizer assignment to webhook ([#4000](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4000)) ([b78ccde](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b78ccde771f6c24b736e046cd41acb72308baac0))


### Bug Fixes

* add warnings to log for GitHub rate limits ([#3988](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3988)) ([2ed0b29](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2ed0b29960a7eb932090cdd3612680c9efc3a5b8))
* bump node dependencies and cleanup ([#4020](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4020)) ([221958b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/221958bccb56642ae654d0a27eb2b27a17013700))
* **lambda:** bump the aws group across 1 directory with 5 updates ([#4005](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4005)) ([4ca422d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4ca422d95da447416f0bc1b53e6e0fea70cca4bd))
* **lambda:** bump the aws group across 1 directory with 5 updates ([#4017](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4017)) ([0cd6a85](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0cd6a854ee54b36b2ede20145a2e8a77f5ed534f))
* mark github_app variable as sensitive ([#4013](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/4013)) ([08be669](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/08be669a9d04bb8c5930b69d17f12748720e6148))

## [5.12.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.12.1...v5.12.2) (2024-07-12)


### Bug Fixes

* remove job start hook with senstive information ([#3986](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3986)) ([bbcb470](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/bbcb4707f698b29c470c0aadf81c9ac2c37781f8)), closes [#3980](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3980)

## [5.12.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.12.0...v5.12.1) (2024-07-05)


### Bug Fixes

* dependency updates lambda ([#3965](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3965)) ([a6df2b6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a6df2b65dd74a911e9403f7ae7a03230d5003e8e))
* improve logging when there is an error retrieving ssm parameters ([#3962](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3962)) ([1498c8c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1498c8c2bdc4e1df8fd3671f2cc2c59d86c3eb92))

## [5.12.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.11.0...v5.12.0) (2024-06-28)


### Features

* add support for matcher config tiering options ([#3953](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3953)) ([5f9d9eb](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5f9d9eb3f9fbda10495b9a2194dc91867942276e))
* **lambda:** add option to define explicit lambda tags ([#3934](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3934)) ([7e98943](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7e98943c0b8962ebd0a231da233b431ba692c321))


### Bug Fixes

* **lambda:** bump braces from 3.0.2 to 3.0.3 in /lambdas ([#3944](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3944)) ([1aef82b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1aef82b19fd1b53194b07ba650649f6d314e597c))
* **lambda:** bump the aws group across 1 directory with 2 updates ([#3955](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3955)) ([2e094cf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2e094cf242fd910d2e2451ece3946f7232f048b7))
* **lambda:** bump the aws group across 1 directory with 6 updates ([#3949](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3949)) ([76fe9af](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/76fe9af0ad25f2d7647c1c838c6a144b55a1105d))
* **webhook:** Don't log warning when secondary job queue is empty ([#3942](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3942)) ([ef25bd4](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ef25bd44717d282cc123ada570b0b03cf76b4d7f))
* **webhook:** Don't set `${SQS_WORKFLOW_JOB_QUEUE}` to empty string ([#3943](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3943)) ([6c48dff](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6c48dffff558dba78d013f10764fb65329b6523e))

## [5.11.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.10.4...v5.11.0) (2024-05-22)


### Features

* add variable to configure ebs optimization for runner instances ([479b779](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/479b779a71c77a62dd28d247f8a74cb75ce083f0))
* add variable to configure ebs optimization for runner instances ([#3901](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3901)) ([479b779](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/479b779a71c77a62dd28d247f8a74cb75ce083f0))
* Restrict instance SSM permissions ([#3918](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3918)) ([9399cf2](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9399cf29bec963dfa305f367f37c098a76130371))


### Bug Fixes

* adding missing permissions to boundaries ([#3873](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3873)) ([93e8d27](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/93e8d2746b647539212dbc65887ec748a1d734b7))
* **lambda:** bump the aws group across 1 directory with 6 updates ([#3907](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3907)) ([50dda9a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/50dda9a465229bdb8d106e7ebc5d5b1de115a286))

## [5.10.4](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.10.3...v5.10.4) (2024-05-06)


### Bug Fixes

* **lambda:** bump ejs from 3.1.9 to 3.1.10 in /lambdas ([#3887](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3887)) ([4cca21f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4cca21fa5c44316e2ef2574563b24218f8ae090d))
* **lambda:** bump the aws group across 1 directory with 6 updates ([#3890](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3890)) ([d1cd712](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d1cd712204b678a878f22eea75e540cb28d6a3ad))
* Typo in env vars for scale-up lambda ([#3891](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3891)) ([f4ecf46](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f4ecf466014d7d51aed238aa851290908d3c7972))

## [5.10.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.10.2...v5.10.3) (2024-05-03)


### Bug Fixes

* revert depedency update / broken release 5.10.2 ([#3885](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3885)) ([7464f2b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7464f2bbb401c9c1b07d252c2572a4a970468e95))

## [5.10.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.10.1...v5.10.2) (2024-04-25)


### Bug Fixes

* change log level for termination watcher if no match ([#3866](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3866)) ([649ad35](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/649ad35b63f519739354b8bc801dff6c70d66f46))
* update dependencies ([#3867](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3867)) ([85b5aac](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/85b5aac73931cebdeb779a86118d7b5043286493))

## [5.10.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.10.0...v5.10.1) (2024-04-24)


### Bug Fixes

* Add missing webhook_events_workflow_job_queue_policy to multi-runner queue ([#3848](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3848)) ([a8cba4e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a8cba4e3795c6105636530ede9360e3123c92c3a))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3861](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3861)) ([6119354](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/611935472f8551c103544bc074c7ae419b455528))
* **lambda:** bump typescript from 5.3.3 to 5.4.5 in /lambdas ([#3863](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3863)) ([e3f3d77](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e3f3d779a8f66f2933da0600c6ef3de252fb440d))
* webhook expects REPOSITORY_ALLOW_LIST env var ([#3856](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3856)) ([0006ab9](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0006ab9fb5880fb1daf31b3e1b8d218e7b86105b))

## [5.10.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.9.0...v5.10.0) (2024-04-17)


### Features

* add spot termination watcher (beta) ([#3789](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3789)) ([b2dc794](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b2dc794f08c932470dae846dad0e0a5f33a68cc4))
* allow caller to provide custom userdata ([#3798](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3798)) ([ac49daf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ac49daf4afb14b6710d2d652bc2c0f51fc2af98f))
* Allow to disable runner max scaling check ([#3849](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3849)) ([e05a043](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e05a043b7354f42f391a1b5319bc850d4e8b2c02))


### Bug Fixes

* **lambda:** bump axios from 1.6.7 to 1.6.8 in /lambdas ([#3814](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3814)) ([513b22f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/513b22f6291d9437aae41367098096ca6377547b))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3834](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3834)) ([e7e56ea](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e7e56ea9466feedec46c41f0834ebfd05e6f512f))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3846](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3846)) ([9303a10](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9303a108dfd12ff0c63e7aeb55aa814c7f14619c))
* **lambda:** bump the aws group in /lambdas with 6 updates ([#3818](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3818)) ([9a9031e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9a9031ead20546f6a3b939435a801e5aeb8264b8))

## [5.9.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.8.0...v5.9.0) (2024-03-14)


### Features

* **runners:** add retry logic to default install and start script for dnf operations ([#3787](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3787)) ([6a8e1f0](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6a8e1f03e122f99006c488e544c6cf3b672fa304))
* Update default runtime from nodejs18.x to nodejs20.x ([#3791](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3791)) ([11ace32](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/11ace32b0a1283c65a19fe7035c0a9835f6cdeab))


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 6 updates ([#3803](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3803)) ([eedbf52](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/eedbf525a9f1d377d8a1f9fb50d1842eb8947afe))

## [5.8.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.7.1...v5.8.0) (2024-02-27)


### Features

* Add option to set lambda memory increase webhook memory ([#3778](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3778)) ([40bceb6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/40bceb6db1d4bed7959b35a7b23f2b2d21ddc447))
* migrate webhook runner configuration to SSM ([#3728](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3728)) ([32492e3](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/32492e3780509d4ff67d0ed3ad55f3506174974c))


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 6 updates ([#3772](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3772)) ([3549bc1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3549bc1824fcf15b7b008eb6ea455a89ae3278df))
* **lambda:** bump the aws group in /lambdas with 6 updates ([#3783](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3783)) ([b850e85](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b850e853e221e4f1026f31e1bfc8d4c73d08c212))
* **lambda:** bump the octokit group in /lambdas with 2 updates ([#3773](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3773)) ([de9985a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/de9985a9f6babf83b3c2149247db7ecee602a500))

## [5.7.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.7.0...v5.7.1) (2024-02-13)


### Bug Fixes

* add retry logic to runner start script for libicu download ([#3748](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3748)) ([1b4597b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1b4597b613dc46dcc63cacb546ff4ce489cd731f))
* **lambda:** bump the aws group in /lambdas with 6 updates ([#3762](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3762)) ([e43fd80](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e43fd80324dd1e553dc81720b39893f1c6dd97d4))
* **lambda:** bump the octokit group in /lambdas with 1 update ([#3763](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3763)) ([77586c5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/77586c5efb6a4e33bb2c056867738c13559292b9))

## [5.7.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.6.3...v5.7.0) (2024-02-12)


### Features

* allow setting VPC and subnets per runner ([#3467](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3467)) ([1288c81](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1288c81de1b9905a71b8f44c03efaf526384b0f2))


### Bug Fixes

* Correct typo in README.md ([#3758](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3758)) ([7186c1c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7186c1ce48cdeb4ec017d3303f8b7f69d609891a))
* **images:** avoid wrong AMI selected for ubuntu jammy ([#3747](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3747)) ([595aec9](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/595aec9833dd1d1b1383449c0a8ea2284ed98406))
* **lambda:** bump @aws-lambda-powertools/logger from 1.17.0 to 1.18.0 in /lambdas ([#3754](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3754)) ([98131ff](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/98131ffd44b735e120d64e9a77020dc5733021d0))
* **lambda:** bump axios from 1.6.2 to 1.6.7 in /lambdas ([#3755](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3755)) ([80a34bd](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/80a34bd7eaafa49c774263ae5406bdc74255d250))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3730](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3730)) ([7854a5f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7854a5f7ed0cdbcbedd746f34074637898d5125d))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3743](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3743)) ([7ca40ef](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7ca40ef1f952403e53e78193eceaea1b1bb67ff6))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3753](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3753)) ([9f3aa68](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9f3aa689f1fdd574dc2980fb3d3f6166bd99238b))
* windows userdata does not support gzip ([#3759](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3759)) ([b74df54](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b74df549521f7d8d54eb0e1e436803934cabac3f))

## [5.6.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.6.2...v5.6.3) (2024-01-16)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 5 updates ([#3720](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3720)) ([9a17b13](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9a17b132c999b392e19af690362340508debe1f7))
* **lambda:** bump the octokit group in /lambdas with 1 update ([#3721](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3721)) ([9b13c09](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9b13c099598728d91f58a79b46d460fad12c94a1))
* **runners:** zip base64 encoded user data to avoid size limits ([#3717](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3717)) ([f2bbcb1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f2bbcb16e2c99dbf58057680564f517e74599d73)), closes [#3700](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3700)

## [5.6.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.6.1...v5.6.2) (2024-01-12)


### Bug Fixes

* **multi-runner:** remove renundant default labels ([#3715](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3715)) ([9353734](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/93537347538a8a57516ae1737b96d4c37319af32))
* **webhook-github-app:** Allow new lines in base64 key for module webhook-github-app ([#3714](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3714)) ([57f056d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/57f056dc4a57896d702c8bf056fceb8b3c6e77f8))

## [5.6.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.6.0...v5.6.1) (2024-01-10)


### Bug Fixes

* **lambda:** bump follow-redirects from 1.15.2 to 1.15.4 in /lambdas ([#3712](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3712)) ([97c5fcf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/97c5fcf6fe3b94b2af1646e8c18e00b69e608a04))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3699](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3699)) ([6fa667f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6fa667fae7e4302cf643bcdb4ff3c91b1e4ed8d1))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3705](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3705)) ([477c59b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/477c59b3516558b02c98d56db652e634015a953c))
* **lambda:** bump the octokit group in /lambdas with 1 update ([#3706](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3706)) ([af40f28](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/af40f28c42d9be68d5bd945624ce390e87f87374))
* Loosen the AWS Terraform provider constraint ([#3708](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3708)) ([649da42](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/649da42de76a8b3ed895f0f0e6b08d4719198592))
* workflow job event queue misconfiguration. ([#3710](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3710)) ([0a2577e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0a2577ed250c73ac8272132f7b39874b9957fdbd))

## [5.6.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.5.2...v5.6.0) (2023-12-20)


### Features

* upgrade lambda runtime from 18x to 20x ([#3682](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3682)) ([02dd3e6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/02dd3e64db3a8a026613f010f6654970c8daf6c2))


### Bug Fixes

* **lambda:** bump @aws-lambda-powertools/tracer from 1.16.0 to 1.17.0 in /lambdas ([#3675](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3675)) ([b3536f7](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b3536f7cb37a36643cf7beffd1629440bda221ca))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3671](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3671)) ([677965d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/677965df7d392be7a5176837f74b6698b70a4947))
* **lambda:** bump the octokit group in /lambdas with 1 update ([#3672](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3672)) ([67facac](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/67facac961890186eed199ffa685211fbc933adb))
* Replace deprecate aws_cloudwatch_event_rule.is_enabled, requires provide upgrade ([#3655](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3655)) ([3c78f65](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3c78f652a4b2569e1e93ce739e8a9cda62c2128e))

## [5.5.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.5.1...v5.5.2) (2023-12-16)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 5 updates ([#3661](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3661)) ([81da0be](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/81da0becd678079e23d0e67a66b8a85a93d09101))
* **lambda:** bump the octokit group in /lambdas with 1 update ([#3662](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3662)) ([76697e6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/76697e69c41dd3524496977869c0b6aaa6a07d36))

## [5.5.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.5.0...v5.5.1) (2023-12-07)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 5 updates ([#3647](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3647)) ([aa0de8d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/aa0de8d4f742cf0cc61e87010d70d8aca056f687))
* **lambda:** bump the octokit group in /lambdas with 1 update ([#3648](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3648)) ([e5dc96b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e5dc96b49af98da1630aa96bbde0f2589b145941))

## [5.5.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.4.2...v5.5.0) (2023-11-30)


### Features

* add failover to on-demand in case request is failing ([#3409](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3409)) ([d71e631](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d71e631f3befe7aa15a56c52ba8ead2be71be460))


### Bug Fixes

* add runner name prefix to context of scale-up lambda ([#3644](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3644)) ([2936edd](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2936edde98bbd19349396ec575d810caa4f75efb))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3635](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3635)) ([9615e53](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9615e53af45ae80884ea02570603dd9e614140d4))
* **lambda:** bump the octokit group in /lambdas with 1 update ([#3636](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3636)) ([876db0c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/876db0ce2bf6f39ab3eb4264512086aafbeb65f1))

## [5.4.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.4.1...v5.4.2) (2023-11-26)


### Bug Fixes

* **examples:** webhook-github-app multiple character args ([#3625](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3625)) ([941682e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/941682e8ffa04df6976f8f2f9e91ffe3aa4f6b66))
* **lambda:** bump @aws-lambda-powertools/tracer from 1.14.2 to 1.16.0 in /lambdas ([#3622](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3622)) ([ba73565](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ba73565220179dd685c19d5c0cb57634f9d24fa8))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3620](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3620)) ([1b944d5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1b944d59bbbed7a6b60ba4d205440ff730208230))
* **lambda:** bump the octokit group in /lambdas with 2 updates ([#3621](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3621)) ([c54e8c8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c54e8c896b4f6a19dcc15172671fdf31de6e371d))

## [5.4.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.4.0...v5.4.1) (2023-11-17)


### Bug Fixes

* **lambda:** bump @aws-lambda-powertools/logger from 1.14.0 to 1.14.2 in /lambdas ([#3611](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3611)) ([1292c6b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1292c6bf262c088be70119857327f332ddfea4ec))
* **lambda:** bump @middy/core from 3.6.2 to 4.7.0 in /lambdas ([#3609](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3609)) ([2d0f039](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2d0f039f6b2e0b0bec4cb501e4797820c26531e8))
* **lambda:** bump axios from 1.5.1 to 1.6.0 in /lambdas ([#3604](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3604)) ([a316b82](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a316b8226cb05f5ed9b586549892fa0ab4cb52b8))
* **lambda:** bump axios from 1.6.0 to 1.6.1 in /lambdas ([#3612](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3612)) ([ab3627f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ab3627f989564aa65efaa6b33c666870a9710aa8))
* remove unused environment variable ([#3616](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3616)) ([bb68562](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/bb68562953304dc1f6a6d6d5d2309db5e1e823c0))

## [5.4.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.3.0...v5.4.0) (2023-11-08)


### Features

* added changes to enable tracing in lambdas. ([#3554](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3554)) ([970e8a6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/970e8a657a9a3d62966c75c6738eba7292c77aa8))


### Bug Fixes

* **lambda:** Bump the aws group in /lambdas with 5 updates ([#3595](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3595)) ([581a4bf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/581a4bff74a22c6d9577c35c6bb683d26cfd5cff))

## [5.3.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.2.1...v5.3.0) (2023-11-03)


### Features

* order label matchers for multi-runners ([#3591](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3591)) ([1829721](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1829721cb647b005ca44b5feb8d0de27217e6074))

## [5.2.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.2.0...v5.2.1) (2023-10-31)


### Bug Fixes

* shorten role name for ssm housekeeper ([#3587](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3587)) ([a1440b5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a1440b5a1b329e65e860292895714cc3f072a1bb))

## [5.2.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.1.0...v5.2.0) (2023-10-30)


### Features

* SSM housekeeper ([#3577](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3577)) ([340deea](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/340deeaee94fa9cddbe11d9421cb06c35f2a2726))


### Bug Fixes

* allow use of associate_public_ipv4_address from top-level module ([#3572](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3572)) ([0ff7b23](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0ff7b2389fcbb607cdc37392b1612a14e9511c43))

## [5.1.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v5.0.0...v5.1.0) (2023-10-30)


### Features

* add AMI house keeping lambda ([#3570](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3570)) ([87104e8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/87104e8c09a9aaa6069be85c9b68920e455ff715))


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 5 updates ([#3579](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3579)) ([ccb1d32](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ccb1d32be888a28d37417275950afdc01c4ac0da))

## [5.0.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.7.0...v5.0.0) (2023-10-27)


### ⚠ BREAKING CHANGES

* remove depcrecated input and output variables ([#3567](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3567))
* Change runner labels to list[string] and apply TFLint ([#3410](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3410))
* replace Amazon Linux 2 by Amazon Linux 2023 as default Linux AMI ([#3437](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3437))

### Features

* replace Amazon Linux 2 by Amazon Linux 2023 as default Linux AMI ([#3437](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3437)) ([35219f5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/35219f5b35dcdd780e1a7d3d6b109933914233da))


### Bug Fixes

* Change runner labels to list[string] and apply TFLint ([#3410](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3410)) ([0b398f2](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0b398f2f1010e0af84022a6d11d696cdcb9eb1ec))
* remove depcrecated input and output variables ([#3567](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3567)) ([89c8575](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/89c8575bf5df80c9a0861ff63e72a5762edbdcfc))

## [4.7.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.6.0...v4.7.0) (2023-10-26)


### Features

* Add public IP association to github runner ([#3547](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3547)) ([1a25b2c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1a25b2c6bced8ab4657ace64ef0b6694140856de))


### Bug Fixes

* add tags to aws resources ([#3549](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3549)) ([c747139](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c74713923635d51e37cca98449a396a73f71a7bc))
* restrict runner security group to only ingress ([#3564](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3564)) ([e63fdc5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e63fdc5ec3b85f2b1fa9a4f881588681fee0c07d))

## [4.6.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.5.1...v4.6.0) (2023-10-19)


### Features

* Use Instance Metadata Service Version 2 by default. ([#3513](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3513)) ([d8d69c3](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d8d69c34b0492f125a9d23689e356d04021fe434))

## [4.5.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.5.0...v4.5.1) (2023-10-18)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 5 updates ([#3530](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3530)) ([0ada33b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0ada33b99270da88716e7b4a381fae6d7a06fdd3))
* **webhook:** Avoid jobs are accepted without labels ([#3548](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3548)) ([cb78738](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/cb7873819b660be99b336c7ee486405b5cb3c2cb))

## [4.5.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.4.1...v4.5.0) (2023-10-04)


### Features

* namespace EC2 tags ([#3523](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3523)) ([35aa73a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/35aa73ac1e6df30d4a5c314457da5646a117131b))


### Bug Fixes

* **lambda:** Bump @aws-lambda-powertools/logger from 1.12.1 to 1.14.0 in /lambdas ([#3521](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3521)) ([3f42529](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3f425297c4458d3dc31f45d1a22302ba39c59000))
* **lambda:** Bump the aws group in /lambdas with 5 updates ([#3525](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3525)) ([1b24342](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1b243426fdb76fc9fff2d244df357f15bbbb7b24))
* **lambda:** Bump the octokit group in /lambdas with 1 update ([#3519](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3519)) ([cde80cd](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/cde80cd9e6144e5b6c11f055e601521f277a4932))

## [4.4.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.4.0...v4.4.1) (2023-09-28)


### Bug Fixes

* incorrect path to update app script ([#3510](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3510)) ([0865273](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0865273c9b426ce455380b297f5a9edbf3c767f4))

## [4.4.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.3.0...v4.4.0) (2023-09-27)


### Features

* add module to update GitHub app webhook ([#3451](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3451)) ([525f400](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/525f400f663652b05273c7376734e2853fa34fa5))


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 5 updates ([#3500](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3500)) ([8d4e0cd](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8d4e0cd95ab55fa6ffad5b8a8d2a113fad75c820))
* **lambda:** bump the octokit group in /lambdas with 2 updates ([#3501](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3501)) ([f0c1285](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f0c1285d994f79dfa5731b851ae6c7b8614bd33a))

## [4.3.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.2.3...v4.3.0) (2023-09-22)


### Features

* Add ebs_optimized option ([#3492](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3492)) ([bf73f1c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/bf73f1ce3756ce8a964d6782373a18128903f5e1))


### Bug Fixes

* **lambda:** Bump the aws group in /lambdas with 5 updates ([#3483](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3483)) ([1fad99d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1fad99d6df3bf8bb78d57feac08311776c60aa4f))
* missing partion in ARN to support China or govCloud ([#3494](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3494)) ([b0b3df6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b0b3df6d828ae239bc3fab712e5744ec7b4d2403))

## [4.2.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.2.2...v4.2.3) (2023-09-12)


### Bug Fixes

* **lambda:** Bump axios from 1.4.0 to 1.5.0 in /lambdas ([#3475](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3475)) ([f94645b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f94645b771764af4ba0f0e3e55f481c3fd5833dd))
* **lambda:** Bump cron-parser from 4.8.1 to 4.9.0 in /lambdas ([#3474](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3474)) ([08dfabf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/08dfabf940f2fdcab3831796c2be6c2afc967fce))
* **lambda:** Bump the aws group in /lambdas with 5 updates ([#3472](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3472)) ([c8245e0](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c8245e0eea27320e32eb5e6514e13e6d93f47b7a))

## [4.2.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.2.1...v4.2.2) (2023-09-06)


### Bug Fixes

* **lambda:** Bump the aws group in /lambdas with 5 updates ([#3462](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3462)) ([a8276a4](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a8276a471020177e6350f000c029c3636deb68fa))
* **lambda:** Bump typescript from 5.1.6 to 5.2.2 in /lambdas ([#3465](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3465)) ([026ce11](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/026ce116907209dea96cfe3dad1413bfde4bf7bd))

## [4.2.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.2.0...v4.2.1) (2023-08-31)


### Bug Fixes

* **lambda:** Bump the aws group in /lambdas with 5 updates ([#3455](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3455)) ([3fbe6d6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3fbe6d6ff2a73a7194acf2b31e8efd146a9feab8))

## [4.2.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.1.2...v4.2.0) (2023-08-24)


### Features

* support for cloudwatch config on per runner for multi-runners ([#3447](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3447)) ([cdaa950](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/cdaa95057d09966c509a360fd9cea9d81a4993d9))

## [4.1.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.1.1...v4.1.2) (2023-08-22)


### Bug Fixes

* **lambda:** Bump the aws group in /lambdas with 5 updates ([#3439](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3439)) ([416e52f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/416e52facaa0384a7662425fb87925ba4a0cf574))
* Replace defaul AMI for WIndows ([#3445](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3445)) ([a590da5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a590da5638db1af4ff5fe315f6ab833cc9b016c2)), closes [#3423](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3423)

## [4.1.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.1.0...v4.1.1) (2023-08-16)


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 5 updates ([#3425](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3425)) ([79983a0](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/79983a081c11b8c6cabd33c0f01c3ace44af0c87))
* set log retention in each module by default to 180 ([#3433](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3433)) ([86e6abc](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/86e6abc174d714c0efafb25e7b8cb04d7b1e1e28))

## [4.1.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.0.2...v4.1.0) (2023-08-08)


### Features

* **runners:** add configurable eviction strategy to idle config ([#3375](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3375)) ([896f473](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/896f473107beb37468ce957825ac6de448119dbc))


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 5 updates ([#3413](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3413)) ([1acc8ba](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1acc8ba295e81c0303bbc08db864a90495a23df9))
* **runners:** retry aws metadata token download on Linux ([#3408](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3408)) ([ef46827](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ef46827e31d3aaabfe9676df4caad756eb1f3dc8))

## [4.0.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.0.1...v4.0.2) (2023-08-03)


### Bug Fixes

* ensure `/opt/start-runner-service.sh` is run with Bash ([1657e8e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1657e8e05cd1f438b5420f89f5e0511e868047e6))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3398](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3398)) ([14db7ca](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/14db7cad993a478ab42ef12deefb3286f2808468))
* **lambda:** bump typescript from 5.0.4 to 5.1.6 in /lambdas ([#3399](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3399)) ([ff8af09](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ff8af09678ad99f8b99c7424e56f5d56cbbc0b9b))
* **runners:** ensure `/opt/start-runner-service.sh` is run with Bash ([#3407](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3407)) ([1657e8e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1657e8e05cd1f438b5420f89f5e0511e868047e6))

## [4.0.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v4.0.0...v4.0.1) (2023-07-31)


### Bug Fixes

* allow disable JIT config for ephemeral runners ([#3393](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3393)) ([cfbcc94](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/cfbcc944fc183b481caaee323e7832ec1964eb54))

## [4.0.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.6.1...v4.0.0) (2023-07-25)


### ⚠ BREAKING CHANGES

* replace registration tokens by JIT config for ephemeral runners ([#3350](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3350))

### Features

* replace registration tokens by JIT config for ephemeral runners ([#3350](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3350)) ([2b776ba](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2b776bacb306be2eb14cf20f31251eb544a3cfba))


### Bug Fixes

* **lambda:** bump the aws group in /lambdas with 3 updates ([#3381](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3381)) ([3af675a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3af675a05ece3dd55f9680249fb8c6e3bcd51811))
* **lambda:** bump the octokit group in /lambdas with 4 updates ([#3386](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3386)) ([b067138](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b067138bccd68ae3ee56c9b8168a6737c6cbb46b))
* scale up lambda build issue. ([#3388](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3388)) ([e78232c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e78232caeeeab8829c04a9785ee05ddfe07939c1))

## [3.6.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.6.0...v3.6.1) (2023-07-20)


### Bug Fixes

* add state for multi-runner default ami-filter ([#3373](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3373)) ([f5b6ead](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f5b6eade82163373fff8ee9f4dc07242a44a3b92))
* broken AMI fileter ([#3371](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3371)) ([999d139](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/999d139c49bbce4de681d95d4462adbccec5f4fa))
* **lambda:** bump word-wrap from 1.2.3 to 1.2.4 in /lambdas ([#3374](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3374)) ([c320253](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c320253d8cd86a5190ef67e748e7d296e03ef788))
* merge ami filters. ([999d139](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/999d139c49bbce4de681d95d4462adbccec5f4fa))
* retry aws metadata token download ([#3292](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3292)) ([5537474](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/553747418daaf92b6732615cdfc8df91a6295366))

## [3.6.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.5.0...v3.6.0) (2023-07-18)


### Features

* **images:** Allow specifying temporary security group source IP for packer builds ([#3351](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3351)) ([6d018f6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6d018f648d998342c3e01443d49b60315d6c8f7f))
* **syncer:** update bucket policy to require ssl ([#3342](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3342)) ([7a3d825](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7a3d8256c8a28849f84516d49a44e537e77eb4f2))
* tag runner volumes with the same tags as the instance ([#3354](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3354)) ([116ea58](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/116ea580eb004d581f46e4f245a3d3409c3b7568))
* update bucket policy to require ssl ([7a3d825](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7a3d8256c8a28849f84516d49a44e537e77eb4f2))


### Bug Fixes

* add more outputs to multi runners module. ([#3343](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3343)) ([41a74ec](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/41a74ec6203e8a5f6af96fa7c054724108b08874))
* Changed the ami filters to ensure that AMI is available before its used in launch template. ([#3220](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3220)) ([0bcfbc7](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0bcfbc784fd22313a36613fe1209fede8a52e254))
* **lambda:** bump @aws-lambda-powertools/logger from 1.8.0 to 1.10.0 in /lambdas ([#3337](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3337)) ([708748a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/708748aa6e29681682ebec0efdcb28ff84c362c2))
* **lambda:** bump semver from 5.7.1 to 5.7.2 in /lambdas ([#3359](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3359)) ([1279e8c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1279e8cfaefe595ffefa803bd1e61cccf8075586))
* **lambda:** bump the aws group in /lambdas with 5 updates ([#3368](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3368)) ([32c15ec](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/32c15ec3cc38365224871b6806cc21f015f8f0a7))
* **lambda:** Rename scale-down.tf service name ([#3361](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3361)) ([22fad41](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/22fad412b7b91706cc3cb7b227a9d57c1d77d73a))
* **multi-runner:** Fix runner_additional_security_group_ids ([#3352](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3352)) ([1f0c938](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1f0c938e71e3afc81921c5659cc9e6267dafdf46))

## [3.5.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.4.2...v3.5.0) (2023-06-21)


### Features

* Support AWS 5.x Terraform provider ([#3315](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3315)) ([d0e8960](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d0e89608f52ff0db4abe204af6718a73e780ea98))


### Bug Fixes

* **lambda:** bump @aws-sdk/client-ec2 from 3.352.0 to 3.356.0 in /lambdas ([#3333](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3333)) ([9cb0369](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9cb0369195855ea2e1f75f905098588101a166f8))
* **lambda:** bump @aws-sdk/client-s3 from 3.352.0 to 3.354.0 in /lambdas ([#3329](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3329)) ([37acc92](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/37acc9247526fdfbe940fca1ad19beea89f3576c))
* **lambda:** bump @aws-sdk/client-ssm from 3.321.1 to 3.350.0 in /lambdas ([#3319](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3319)) ([97d5c73](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/97d5c7384cbeec38ee0d9b16167ed4a2f883d291))
* **lambda:** bump @aws-sdk/client-ssm from 3.352.0 to 3.354.0 in /lambdas ([#3327](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3327)) ([e315230](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e315230f42d9b321a3ba28ff7f9294fc77dec78d))

## [3.4.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.4.1...v3.4.2) (2023-06-13)


### Bug Fixes

* Fix pool logic with runner name prefix ([#3303](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3303)) ([66e2a66](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/66e2a66adcf200a85c0200382756f4fa5a71aadb))
* remove duplicate vpc execution permissions ([#3304](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3304)) ([0bebeef](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0bebeef094b2e64af7f81166becae6c65167df86))

## [3.4.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.4.0...v3.4.1) (2023-05-23)


### Bug Fixes

* added additional outputs to multi runner module. ([#3283](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3283)) ([9644e05](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9644e05a2345369349ee9217da47db68860997d5))
* **lambda:** bump @aws-sdk/client-sqs from 3.321.1 to 3.332.0 in /lambdas ([#3271](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3271)) ([170baa8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/170baa8e8799a6335f4d0f868e89a8496632aa11))
* **lambda:** bump @aws-sdk/client-sqs from 3.332.0 to 3.337.0 in /lambdas ([#3284](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3284)) ([01a053e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/01a053ee049c7a7cd80241d10272155c1a94af88))
* **lambda:** bump @aws-sdk/lib-storage from 3.321.1 to 3.335.0 in /lambdas ([#3281](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3281)) ([9387bee](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9387bee757d7692b33a5599a6d2868de9f2ba492))
* **lambda:** bump @aws-sdk/lib-storage from 3.335.0 to 3.337.0 in /lambdas ([#3286](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3286)) ([2a447ae](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2a447ae43520e9fca19d103ae956d5eb44e7f21a))
* **lambda:** bump @octokit/auth-app from 4.0.9 to 4.0.13 in /lambdas ([#3287](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3287)) ([517d2e0](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/517d2e02623ec863ebeb1fae105332026a32fe9e))
* **lambda:** bump @octokit/types from 9.2.1 to 9.2.2 in /lambdas ([#3273](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3273)) ([e083898](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e083898e4da41c0c1f180094ae132479bc155ee6))
* **multi-runner:** allow runner_additional_security_group_ids to apply to multi_runner_config ([#3221](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3221)) ([5fb1fa8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5fb1fa87e2cec416051c225e5b32504df1e30004))
* **multi-runner:** enable SSE by default for runner-binaries bucket ([#3274](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3274)) ([5d314f2](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5d314f2966381f6d281ef913f601f579e627f260))
* **webhook:** logic to find the workflow labels inside runner config supported labelsets. ([#3278](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3278)) ([9fcf33a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9fcf33a86254cf64f115327f506c940583144ed5))

## [3.4.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.3.0...v3.4.0) (2023-05-12)


### Features

* **runners:** allow explicitly standard or unlimited ([#3244](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3244)) ([e2cf7ac](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e2cf7ace992df354281c19f8240a97c134264758))


### Bug Fixes

* Expand repository_white_list documentation ([#3254](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3254)) ([5f3771a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5f3771af9e81f362f598fed5178e6f029fa2aa23))
* **lambda:** bump @octokit/types from 9.2.0 to 9.2.1 in /lambdas ([#3259](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3259)) ([4bb77e0](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4bb77e062d378d52adddeb97929166d1ba9a95c4))

## [3.3.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.2.0...v3.3.0) (2023-05-05)


### Features

* added the option to generate outputs from packer builds. ([#3246](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3246)) ([97c4ee7](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/97c4ee7d1145c5f10ea01bbe4a81e1e6e827cef9))
* **syncer:** Enable S3 bucket versioning for syncer S3 bucket ([#3108](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3108)) ([e679021](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e67902133b2ab426068964c9bc24aab6ecd37a79))


### Bug Fixes

* **lambda:** bump @octokit/types from 9.1.2 to 9.2.0 in /lambdas ([#3243](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3243)) ([4ff85bb](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4ff85bbdb7fc00b8174092ed23c2eef10842460b))
* **lambda:** bump axios from 1.3.6 to 1.4.0 in /lambdas ([#3242](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3242)) ([5620d88](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5620d886d74423889eb13f3c1746f784fbcb36a0))
* S3 bucket logging prefix regex ([a952b91](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a952b91895b6629827a5af0f54fbc5c52661e36b))
* **syncer:** S3 bucket logging prefix variable condition ([#3251](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3251)) ([a952b91](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a952b91895b6629827a5af0f54fbc5c52661e36b))

## [3.2.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.2.0...v3.2.0) (2023-04-28)


### Features

* **runner:** include instance type & availability zone in Github Action logs ([#3223](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3223)) ([775a548](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/775a54831d31710d7c8faf38320e010807b1c828))
* **runners:** Include instance type & availability zone in logs ([775a548](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/775a54831d31710d7c8faf38320e010807b1c828))


### Bug Fixes

* **lambda:** bump @aws-sdk/client-ec2 from 3.319.0 to 3.322.0 in /lambdas ([#3228](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3228)) ([5e66d58](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5e66d581a04af62c247970c665c3a4c5972f0791))
* **lambda:** bump @aws-sdk/client-s3 from 3.319.0 to 3.321.1 in /lambdas ([#3230](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3230)) ([42a2085](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/42a2085af5c2b450f1f3a5383e3f55d032f11ea4))
* **lambda:** bump @aws-sdk/client-sqs from 3.319.0 to 3.321.1 in /lambdas ([#3229](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3229)) ([9caa02d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9caa02d997fa0a620a71a96d54f06bd3f4cc2d2e))
* **lambda:** bump @aws-sdk/lib-storage from 3.319.0 to 3.321.1 in /lambdas ([#3227](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3227)) ([37e970a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/37e970a38dca95c974901163d7ae26312b446aba))
* **multi-runner:** convertdistribution_bucket_name to lowercase ([#3219](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3219)) ([43acb08](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/43acb08d94841ad5cdb3c3f08d078e67edcd84ea))
* remove deprecated use of S3 ACLs ([#3222](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3222)) ([bf4cea8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/bf4cea84e9c3409dfc8b6c966c083d53444098ad))

## [3.2.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.2.0...v3.2.0) (2023-04-28)


### Features

* **runner:** include instance type & availability zone in Github Action logs ([#3223](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3223)) ([775a548](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/775a54831d31710d7c8faf38320e010807b1c828))
* **runners:** Include instance type & availability zone in logs ([775a548](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/775a54831d31710d7c8faf38320e010807b1c828))


### Bug Fixes

* **lambda:** bump @aws-sdk/client-ec2 from 3.319.0 to 3.322.0 in /lambdas ([#3228](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3228)) ([5e66d58](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5e66d581a04af62c247970c665c3a4c5972f0791))
* **lambda:** bump @aws-sdk/client-s3 from 3.319.0 to 3.321.1 in /lambdas ([#3230](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3230)) ([42a2085](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/42a2085af5c2b450f1f3a5383e3f55d032f11ea4))
* **lambda:** bump @aws-sdk/client-sqs from 3.319.0 to 3.321.1 in /lambdas ([#3229](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3229)) ([9caa02d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9caa02d997fa0a620a71a96d54f06bd3f4cc2d2e))
* **lambda:** bump @aws-sdk/lib-storage from 3.319.0 to 3.321.1 in /lambdas ([#3227](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3227)) ([37e970a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/37e970a38dca95c974901163d7ae26312b446aba))
* **multi-runner:** convertdistribution_bucket_name to lowercase ([#3219](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3219)) ([43acb08](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/43acb08d94841ad5cdb3c3f08d078e67edcd84ea))
* remove deprecated use of S3 ACLs ([#3222](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3222)) ([bf4cea8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/bf4cea84e9c3409dfc8b6c966c083d53444098ad))

## [3.2.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.1.0...v3.2.0) (2023-04-28)


### Features

* **runner:** include instance type & availability zone in Github Action logs ([#3223](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3223)) ([775a548](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/775a54831d31710d7c8faf38320e010807b1c828))
* **runners:** Include instance type & availability zone in logs ([775a548](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/775a54831d31710d7c8faf38320e010807b1c828))


### Bug Fixes

* **lambda:** bump @aws-sdk/client-ec2 from 3.319.0 to 3.322.0 in /lambdas ([#3228](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3228)) ([5e66d58](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5e66d581a04af62c247970c665c3a4c5972f0791))
* **lambda:** bump @aws-sdk/client-s3 from 3.319.0 to 3.321.1 in /lambdas ([#3230](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3230)) ([42a2085](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/42a2085af5c2b450f1f3a5383e3f55d032f11ea4))
* **lambda:** bump @aws-sdk/client-sqs from 3.319.0 to 3.321.1 in /lambdas ([#3229](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3229)) ([9caa02d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9caa02d997fa0a620a71a96d54f06bd3f4cc2d2e))
* **lambda:** bump @aws-sdk/lib-storage from 3.319.0 to 3.321.1 in /lambdas ([#3227](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3227)) ([37e970a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/37e970a38dca95c974901163d7ae26312b446aba))
* **multi-runner:** convertdistribution_bucket_name to lowercase ([#3219](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3219)) ([43acb08](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/43acb08d94841ad5cdb3c3f08d078e67edcd84ea))
* remove deprecated use of S3 ACLs ([#3222](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3222)) ([bf4cea8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/bf4cea84e9c3409dfc8b6c966c083d53444098ad))

## [3.1.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.0.3...v3.1.0) (2023-04-20)


### Features

* **images:** automatically find latest GitHub Runner version when building images ([#3129](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3129)) ([da49078](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/da49078d786cf1b5e6c7f1d053ce9bbcea7de658))
* **lambda:** add support for X-Ray tracing ([#3142](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3142)) ([998a0d1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/998a0d1381e45a52fb909396c2317ca72edec814))

## [3.0.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.0.2...v3.0.3) (2023-04-18)


### Bug Fixes

* **runners:** bump @aws-lambda-powertools/logger from 1.6.0 to 1.8.0 in /modules/runners/lambdas/runners ([#3166](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3166)) ([2015dcf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2015dcf9b45ea7d3079daa9dc1345a03de5dee43))
* **syncer:** bump @aws-sdk/client-s3 from 3.296.0 to 3.315.0 in /modules/runner-binaries-syncer/lambdas/runner-binaries-syncer ([#3190](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3190)) ([31c9987](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/31c9987da90a1b467bb1cee9451d2bb5f9fd5241))
* **syncer:** bump @aws-sdk/lib-storage from 3.305.0 to 3.315.0 in /modules/runner-binaries-syncer/lambdas/runner-binaries-syncer ([#3187](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3187)) ([88e5d5d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/88e5d5d364057a7527a54edf20ed15bcacbe3830))
* **syncer:** bump axios from 1.3.4 to 1.3.5 in /modules/runner-binaries-syncer/lambdas/runner-binaries-syncer ([#3171](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3171)) ([b8ff326](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b8ff3266e03c257cdc564a296d627b60367c212b))
* **syncer:** lowercase distribution_bucket_name ([#3194](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3194)) ([b75010e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b75010ea8e10bb1071bbeec353ef9a384695a3bc))
* **webhook:** bump @aws-sdk/client-sqs from 3.303.0 to 3.315.0 in /modules/webhook/lambdas/webhook ([#3192](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3192)) ([882f911](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/882f911c0b3dca97e8409599e8bd2fcc7fd8bac5))
* **webhook:** bump @aws-sdk/client-ssm from 3.306.0 to 3.315.0 in /modules/webhook/lambdas/webhook ([#3191](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3191)) ([8cea8af](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8cea8afc5316152f5b0ecdb3e94c1bc66ea37b3b))

## [3.0.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.0.1...v3.0.2) (2023-04-07)


### Bug Fixes

* **runners:** bump cron-parser from 4.7.1 to 4.8.1 in /modules/runners/lambdas/runners ([#3154](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3154)) ([698b1ba](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/698b1ba3cb675bc21fe91899474fde38576aa6e8))
* **runners:** bump typescript from 4.9.4 to 4.9.5 in /modules/runners/lambdas/runners ([#3148](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3148)) ([9cfa54d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9cfa54dfdaa5c8cf6d312e2b4a6ce28316d91a99))
* **runners:** upgrade aws sdk v2 to v3 ([#3138](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3138)) ([48da039](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/48da03923a74f9ff5acff44bca39d4e19bae31b3))
* **syncer:** bump @aws-sdk/lib-storage from 3.300.0 to 3.305.0 in /modules/runner-binaries-syncer/lambdas/runner-binaries-syncer ([#3153](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3153)) ([ec51969](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ec5196986448e8ac6bfc249f82f9d32a93d40df5))
* **webhook:** bump @aws-sdk/client-ssm from 3.294.0 to 3.306.0 in /modules/webhook/lambdas/webhook ([#3164](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3164)) ([e6b6eef](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e6b6eef28eb7d444e795537cd3a60e5e701e08f2))

## [3.0.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v3.0.0...v3.0.1) (2023-03-31)


### Bug Fixes

* add required permission to SQS message producer ([3f1fada](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3f1fada5bed09993b51fae9f4b094870384d0b7f))
* Changed windows base image. ([e3708c3](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e3708c3cb74918306b463dd0da94dffb1cb75be8))
* **images:** Changed windows base image to Windows_Server-2022-English-Full-ECS_Optimize* ([#3128](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3128)) ([e3708c3](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e3708c3cb74918306b463dd0da94dffb1cb75be8))
* **images:** wait for cloud-init to be done before updating packages ([#3132](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3132)) ([92dff26](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/92dff260d45ba54fcb98e4b722af0de770aae8f6))
* **syncer:** bump @aws-lambda-powertools/logger from 1.6.0 to 1.7.0 in /modules/runner-binaries-syncer/lambdas/runner-binaries-syncer ([#3111](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3111)) ([3ecb894](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3ecb89405a0774d51ea143e6f59aac1db75fd0da))
* **syncer:** bump @aws-sdk/lib-storage ([b2a88d4](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b2a88d44680f8e05dc7bb3756f73d97975cbe753))
* **webhook:** bump @aws-lambda-powertools/logger ([1a7b6de](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1a7b6de3497a6391dffe783021d0849b761ff419))
* **webhook:** bump @aws-sdk/client-sqs from 3.296.0 to 3.303.0 in /modules/webhook/lambdas/webhook ([#3137](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3137)) ([9cdf359](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9cdf3598346341459501b798d9ce293855b7072d))

## [3.0.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.6.1...v3.0.0) (2023-03-22)


### ⚠ BREAKING CHANGES

* replace tslog by awspowertools logging ([#3037](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3037))

### Features

* replace tslog by awspowertools logging ([#3037](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3037)) ([4c3ee20](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4c3ee20862ed75c8af05d7dad83d8336c1ebfcf5))


### Bug Fixes

* **runners:** bump @aws-sdk/client-ssm from 3.281.0 to 3.296.0 in /modules/runners/lambdas/runners ([#3098](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3098)) ([4a31f7b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4a31f7b81c965eac4c640545c9d7df96e1ecd829))
* **runners:** bump @octokit/rest from 19.0.5 to 19.0.7 in /modules/runners/lambdas/runners ([#3078](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3078)) ([4b26cfd](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4b26cfd33f16ac44b3542a4acceedad00d672592))
* **runners:** bump aws-sdk from 2.1337.0 to 2.1340.0 in /modules/runners/lambdas/runners ([#3100](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3100)) ([f8cac68](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f8cac68ba2d9fbfcaa1042f24f9f27993bf99d3c))
* **syncer:** replaced aws-sdk v2 by aws-sdk v3 ([#3075](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3075)) ([ac158f6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ac158f68b5cc8b024d664fee369ea18455825388))
* **webhook:** bump @aws-sdk/client-sqs from 3.294.0 to 3.296.0 in /modules/webhook/lambdas/webhook ([#3099](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3099)) ([87dbdf5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/87dbdf5d097210bca1badcc3dbf4c8b388ad4b6d))

## [2.6.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.6.0...v2.6.1) (2023-03-17)


### Bug Fixes

* add missing IAM permissions for runners from encrypted AMI ([#3049](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3049)) ([e0819f6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e0819f616c3208835afc20187b8c28478cd0c5ff))
* allow the instances to send metrics ([#3067](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3067)) ([55c40ff](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/55c40ff9235451b070bdde03130af1fc0ce70590))
* packer defintions missing required metadatatag for start script ([9c1fa8a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9c1fa8aaffc2de319eab5fbc8290ed3b1220d580))
* **runners:** bump aws-sdk from 2.1329.0 to 2.1337.0 in /modules/runners/lambdas/runners ([#3072](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3072)) ([0e80518](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0e8051816e4a3dff568a4a9ff14f6fe0a909a48f))
* **runners:** increase the log level to WARN when using the enable_job_queued_check parameter ([#3046](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3046)) ([1de73bf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1de73bf14c9c3898e079f3ef909d60838a7587d5))
* **syncer:** bump axios from 1.3.3 to 1.3.4 in /modules/runner-binaries-syncer/lambdas/runner-binaries-syncer ([#3059](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3059)) ([fa06b30](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fa06b30dac859595a4b08226221e388490b6e250))
* **webhook:** bump @aws-sdk/client-sqs from 3.279.0 to 3.293.0 in /modules/webhook/lambdas/webhook ([#3074](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3074)) ([5de5464](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5de5464a0e4aa77752f7c9e8e35e1e85d3c20943))
* **webhook:** bump @aws-sdk/client-ssm from 3.282.0 to 3.290.0 in /modules/webhook/lambdas/webhook ([#3058](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3058)) ([f626c6d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f626c6de9c11105ed3a7502a68e048f041072859))

## [2.6.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.5.0...v2.6.0) (2023-03-13)


### Features

* **runners:** add option to prefix registered runners in GitHub ([#3043](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3043)) ([ea4e042](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ea4e0426cb32712cfd8235a799d19f65ca531387))


### Bug Fixes

* **syncer:** enable SSE by default for dist bucket ([#3048](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3048)) ([a7ad31a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a7ad31af7e36c0f0158b7d44048ced697dd42734))

## [2.5.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.4.0...v2.5.0) (2023-03-10)


### Features

* added outputs for runner log groups. ([#3044](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3044)) ([2f683da](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2f683dad0053ffc0d50f8bb860fb22e487e5c00e))
* **runner:** allow linux starter-runner script to retrieve labels without with IMDSv2 tags option ([#2764](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2764)) ([0d8a74c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0d8a74cb2d6eff7e91b6a1e41a58d1e08f86965f))


### Bug Fixes

* **pool:** ensure pool top up respects var.ami_id_ssm_parameter_name ([#3040](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3040)) ([c4ab242](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c4ab2428c514b1f8a48e4729e542f5e2ae4b14fa))

## [2.4.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.3.0...v2.4.0) (2023-03-08)


### Features

* add outputs for lambda and lambda log groups ([#3033](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3033)) ([e1ce8be](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e1ce8beff74896eba5b423c7510f2569078a8c01))
* **runners:** allow to use a shared encrypted AMI ([#2933](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2933)) ([5514c72](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5514c7246184152349e3dbfa09a41b49b1156e60))


### Bug Fixes

* **runners:** bump aws-sdk from 2.1289.0 to 2.1329.0 in /modules/runners/lambdas/runners ([#3018](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3018)) ([9bfcfe6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9bfcfe642a1d56ded7e65c190d31539c9ccc1336))
* **webhook:** bump @aws-sdk/client-ssm from 3.278.0 to 3.282.0 in /modules/webhook/lambdas/webhook ([#3021](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3021)) ([7b7c211](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7b7c211e15f8e5e57c2866c6a9656399fdd2305e))

## [2.3.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.2.2...v2.3.0) (2023-03-01)


### Features

* **syncer:** add option to disable runner syncer lambda trigger ([#2986](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2986)) ([5eb27b0](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5eb27b0fcf3bf01561f7ec25cada9f9d7bb0407e))


### Bug Fixes

* **runners:** bump @aws-sdk/client-ssm from 3.272.0 to 3.281.0 in /modules/runners/lambdas/runners ([#3014](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3014)) ([7c390ba](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7c390bae884dda5155d37f34e55600c8fa9023b5))
* **runners:** propagate var.runner_ec2_tags to EC2 volumes ([#2985](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2985)) ([a9b1fa8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a9b1fa85475214f4d1de5fab1e070ed4fad978b0))
* **webhook:** bump @aws-sdk/client-sqs from 3.264.0 to 3.279.0 in /modules/webhook/lambdas/webhook ([#3011](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/3011)) ([9d1d3bd](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9d1d3bd89a76109176a87a234b1c19a01da7873a))

## [2.2.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.2.1...v2.2.2) (2023-02-24)


### Bug Fixes

* **runners:** bump @aws-sdk/client-ssm from 3.245.0 to 3.272.0 in /modules/runners/lambdas/runners ([#2971](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2971)) ([a1c700f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a1c700f00fdeae436e4e3d02740d41cab980de3b))
* **runners:** Fix typo in .setup_info generated in start-runner.ps1. ([#2967](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2967)) ([e8f74bc](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e8f74bca0e97247845968fdd4a5bd4b707e25d73))
* **webhook:** bump @aws-sdk/client-ssm from 3.245.0 to 3.278.0 in /modules/webhook/lambdas/webhook ([#2990](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2990)) ([b61c2bf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b61c2bf9a5ac17a0d90e0c21f18ff949cb22f57b))
* **webhook:** bump @octokit/rest from 19.0.5 to 19.0.7 in /modules/webhook/lambdas/webhook ([#2980](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2980)) ([8a5a8ae](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8a5a8ae69a612623496f8ee1b06126e052f86d0d))

## [2.2.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.2.0...v2.2.1) (2023-02-17)


### Bug Fixes

* **binary-syncer:** Allow lambda inside VPC ([#2938](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2938)) ([4bb80be](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4bb80be972a3b23e2914486bef0af791dc4a0c89))
* **runners:** bump @octokit/auth-app from 4.0.8 to 4.0.9 in /modules/runners/lambdas/runners ([#2953](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2953)) ([fce2a75](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fce2a75f364d64497f5524e7d500085ba651d53c))
* **runners:** Fix incorrect path to SSM cloudwatch config parameter. ([8f4cc41](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8f4cc4187b547c8d1e00f2c445db88b477aec31b))
* **runners:** Fix path to SSM cloudwatch config parameter on Windows ([#2922](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2922)) ([8f4cc41](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8f4cc4187b547c8d1e00f2c445db88b477aec31b))
* **syncer:** bump axios from 1.2.2 to 1.3.3 in /modules/runner-binaries-syncer/lambdas/runner-binaries-syncer ([#2959](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2959)) ([1aa261e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1aa261e594fe5fdef8097258be7fccb0e6e306e2))

## [2.2.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.1.1...v2.2.0) (2023-02-10)


### Features

* Add runner logfiles to output ([#2858](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2858)) ([a1013e9](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a1013e91f0fe380ff7988e20e9efea78e73acea6))


### Bug Fixes

* Add missing entry for AWS-recommended price-capacity-optimized strategy to ProcessEnv interface ([9b8f88b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9b8f88ba275cde40ce2b33ff51aae55b094928a9))
* Adds InsufficientInstanceCapacity to list of scaling errors ([4eb3b16](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4eb3b16b0dfd60fafde6843fa9f8c95399db3f8b))
* **multi-runner:** Create DLQ only if requested ([#2903](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2903)) ([3d33744](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3d337447158196e5cff5ddae78c6d867e103696d))
* **multi-runner:** Missing ami_id_ssm_parameter_name parameter from multi-runner [#2883](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2883) ([#2911](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2911)) ([19138d9](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/19138d9ee9d3abcf16f684782f2a51d32986d636))
* **runner:** Adds InsufficientInstanceCapacity to list of scaling errors ([#2926](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2926)) ([4eb3b16](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4eb3b16b0dfd60fafde6843fa9f8c95399db3f8b))
* **runners:** Add missing entry for AWS-recommended price-capacity-optimized strategy to ProcessEnv interface ([#2921](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2921)) ([9b8f88b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9b8f88ba275cde40ce2b33ff51aae55b094928a9))
* **runners:** Bump @octokit/types from 8.0.0 to 9.0.0 in /modules/runners/lambdas/runners ([#2910](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2910)) ([abdc3ac](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/abdc3ac0fc166d58dd3a990e622c66b5e25b8e98))
* **runners:** Bump cron-parser from 4.7.0 to 4.7.1 in /modules/runners/lambdas/runners ([#2893](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2893)) ([fd2dc78](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fd2dc78e83b15f6f6f554a1360fbd8305e0a3a2b))
* **syncer:** bump aws-sdk from 2.1290.0 to 2.1312.0 in /modules/runner-binaries-syncer/lambdas/runner-binaries-syncer ([#2940](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2940)) ([8d1b281](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8d1b28170814cf3968d3796f954d0080923ee736))
* **webhook:** Bump @octokit/webhooks from 10.4.0 to 10.7.0 in /modules/webhook/lambdas/webhook ([#2907](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2907)) ([d9ab310](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d9ab31051f3ccc6dceeda67038fdf47a0636445b))


### Performance Improvements

* **webhook:** Use @aws-sdk/client-sqs in the webhook Lambda ([#2924](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2924)) ([b8898ef](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b8898ef1034e06bdb01ee4f2f2215c2ec51b22c5))

## [2.1.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.1.0...v2.1.1) (2023-01-12)


### Bug Fixes

* Honnor booting instance in runner pool ([#2801](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2801)) ([9f841f7](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9f841f7ffc0b1d3bb805bedaeb12e462eb74f835))
* **runners:** Bump @aws-sdk/client-ssm from 3.241.0 to 3.245.0 in /modules/runners/lambdas/runners ([#2866](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2866)) ([ca6a0bb](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ca6a0bbc84d0168f9bc6dbe66a9d75de3339caf4))
* **runners:** Bump @octokit/auth-app from 4.0.7 to 4.0.8 in /modules/runners/lambdas/runners ([#2870](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2870)) ([755796f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/755796f62a13a910e15281d08a15903df797a699))
* **runners:** Bump luxon from 3.1.1 to 3.2.1 in /modules/runners/lambdas/runners ([#2860](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2860)) ([159a1ef](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/159a1ef42e17a15907ca12a3f5fb1d9d2900f69a))
* **syncer:** Bump aws-sdk from 2.1284.0 to 2.1290.0 in /modules/runner-binaries-syncer/lambdas/runner-binaries-syncer ([#2871](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2871)) ([f8c027d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f8c027def8c21094a171f804cf03f832ba913ad2))
* **webhook:** Bump @aws-sdk/client-ssm from 3.238.0 to 3.245.0 in /modules/webhook/lambdas/webhook ([#2872](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2872)) ([c50a773](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c50a773cfdeb81ad7bc39f85ea4fe075aab727ce))
* **webhook:** Bump aws-sdk from 2.1289.0 to 2.1292.0 in /modules/webhook/lambdas/webhook ([#2876](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2876)) ([b3507af](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b3507af2f285f86e6435d43eed75c378fb8e43b9))

## [2.1.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.0.2...v2.1.0) (2023-01-06)


### Features

* **runners:** Add delay to prevent ssm rate limits using setTimeout ([#2823](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2823)) ([1461efd](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1461efd925b1f13d0a2be7e8fc9b3fa8138d40fa))


### Bug Fixes

* Correction enable_enable_fifo_build_queue ([#2857](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2857)) ([455e272](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/455e272b81052ad1b60b4d51aeeb1e6b84c5bdd2))
* multi runner runner label ([2840d5e](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2840d5e8e76b7d03259027a7ea44119cc9f3ff60))
* **runners:** Bump @aws-sdk/client-ssm from 3.238.0 to 3.241.0 in /modules/runners/lambdas/runners ([#2838](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2838)) ([89b1839](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/89b18395e41d02b1ce51339cc20dad3781ab7019))
* **runners:** Bump aws-sdk from 2.1284.0 to 2.1289.0 in /modules/runners/lambdas/runners ([#2855](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2855)) ([402e5ac](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/402e5ac1515729140bc4d5c8e213219cf576c7b3))
* Variable enable_enable_fifo_build_queue -&gt; enable_enable_fifo_build_queue ([455e272](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/455e272b81052ad1b60b4d51aeeb1e6b84c5bdd2))
* **webhook:** Bump aws-sdk from 2.1284.0 to 2.1289.0 in /modules/webhook/lambdas/webhook ([#2856](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2856)) ([5d6dd37](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5d6dd3797b5dfe5374345c838bc2bfc4f2819569))
* **webhook:** Bump axios from 1.2.1 to 1.2.2 in /modules/runner-binaries-syncer/lambdas/runner-binaries-syncer ([#2827](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2827)) ([686624a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/686624a6acb638fd62febc9b41abe67b00010a47))

## [2.0.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.0.1...v2.0.2) (2023-01-03)


### Bug Fixes

* **runners:** Bump json5 from 2.2.1 to 2.2.3 in /modules/runners/lambdas/runners ([#2842](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2842)) ([d3169c2](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d3169c2a1c9782f408d0a2eb2a0a45e40ceb0650))
* **syncer:** Bump json5 from 2.2.1 to 2.2.3 in /modules/runner-binaries-syncer/lambdas/runner-binaries-syncer ([#2841](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2841)) ([b2816f7](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b2816f758b364cb41bc4a1839ea188f8c0bc035e))
* **webhook:** Bump json5 from 2.2.1 to 2.2.3 in /modules/webhook/lambdas/webhook ([#2840](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2840)) ([68ff414](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/68ff4149706b6610410f398b2ceaa8d593d48544))

## [2.0.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v2.0.0...v2.0.1) (2023-01-03)


### Bug Fixes

* Restore lost changes during merging next ([#2824](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2824)) ([219cb9b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/219cb9b55bf7300f45d6870a8dfe8ed8c799f9db))

## [2.0.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.18.2...v2.0.0) (2022-12-28)

## Migrations direction
See the [GitHub release](https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v2.0.0) for migration directions

### ⚠ BREAKING CHANGES

* Set default lambda node runtime to 18x on arm64 ([#2763](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2763))
* Drop deprecated terraform variables ([#2761](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2761))
* use optional in variable block_device_mappings ([#2664](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2664))
* Organise SSM paramamters by path ([#2569](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2569))
* Add multi-runner capability ([#2472](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2472))
* Remove old scale down mechanism (< 0.19.0) ([#2519](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2519))
* Remove support check_run ([#2521](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2521))

### Features

* Add multi-runner capability ([#2472](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2472)) ([fef8d65](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fef8d6517cb545d0909f287f23a2df665afdfc43))
* Added publishing to workflow_job event queue for multi runner module. ([#2570](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2570)) ([a8b33b5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a8b33b59b43d830aa96ac3d042dae088789cca10))
* Organise SSM paramamters by path ([#2569](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2569)) ([b912bb8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b912bb891963517cf3c102a3bb9e37e40f09497f))
* Remove old scale down mechanism (&lt; 0.19.0) ([#2519](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2519)) ([7506e9d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7506e9d71e204dbb2b2a79fda5d2d50d07b96382))
* Remove support check_run ([#2521](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2521)) ([4677619](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/467761963af041b72cf10edc8a55a652311261af))
* Set default lambda node runtime to 18x on arm64 ([#2763](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2763)) ([2fd1e16](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2fd1e163e9d11a71ffc128deb33714e505948924))
* **webhook:** Support multiple arrays of tags is matchers. ([#2736](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2736)) ([d17f441](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d17f441c0ce115cf59cab1a8eebb679d9e4a4bdf))


### Bug Fixes

* Apply SSM changes for multi-runner ([c0051f6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c0051f66f1398819c985ddef115a08a288932a17))
* Drop deprecated terraform variables ([#2761](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2761)) ([955bd1d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/955bd1d4de50b3356ac29ac2459915fad26f1062))
* Main module broken after supporting multiple labels  ([#2802](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2802)) ([df054e8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/df054e84a27d2f72820755252bd45257433636e4))
* Main module broken after supporting multiple labels for multi-runnes ([df054e8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/df054e84a27d2f72820755252bd45257433636e4))
* **multi-runner:** Add missing default for runner_metadata_options ([#2690](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2690)) ([910b91c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/910b91c89f9a8c3fc8601773235632b663f54592))
* **multi-runner:** Default value validation error ([#2685](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2685)) ([448a3a7](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/448a3a7e25c8db8bb4f0e85b10e49c76c5c76778))
* Multiirunner dl queue. ([#2644](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2644)) ([0823d47](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0823d47ce1988ecdb8ddb771c9c2539a7f76e0ba))
* Remove extraneous slashes from SSM paths, other typos ([#2765](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2765)) ([7cdef21](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7cdef212c601cc8ba6ac3311b2b991852967279b))
* **runners:** Remove Application legacy tag ([#2705](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2705)) ([96ced8a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/96ced8a11f7e8885efaf50afbcc71a50f1a8c0d4))
* **webhook:** Add missing test dependency ([086a2e1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/086a2e17dc61851ecf1f3cf2bb9ce0465cd2199b))


### Code Refactoring

* use optional in variable block_device_mappings ([#2664](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2664)) ([08c484c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/08c484c3cda0bced87174857c0643eb26dc81317))

## [1.18.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.18.1...v1.18.2) (2022-12-28)


### Bug Fixes

* Update dependencies ([#2804](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2804)) ([1cce2ab](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1cce2abe16284915ba88e6295448f4906eb05c56))

## [1.18.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.18.0...v1.18.1) (2022-12-23)


### Bug Fixes

* Upgrade all non-breaking node dependencies ([#2759](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2759)) ([801e01f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/801e01f290407975aea11b85e44ac9743f9173cb))

## [1.18.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.17.0...v1.18.0) (2022-12-09)


### Features

* Support price-capacity-optimized strategy ([#2718](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2718)) ([ef08afb](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ef08afb2b5594b9f60b15dbb60687ba91c27d668))


### Bug Fixes

* added permissions for lambda to attach lambda to the VPC. ([#2734](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2734)) ([fb72ee8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fb72ee8f6751ebe22f7453a58373f4a983b7ba3c))

## [1.17.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.16.1...v1.17.0) (2022-11-30)


### Features

* **runners:** Namespace `Application` tag ([#2182](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2182)) ([a1a47a4](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a1a47a4a18fe500ea58481dd29cbd95ce45c9bb5))


### Bug Fixes

* Adding missing input lambda vpc vars to syncer module ([#2701](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2701)) ([c91a96b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c91a96bcc95defa0dc1e6bff71b3f607b5523bb5))

## [1.16.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.16.0...v1.16.1) (2022-11-18)


### Bug Fixes

* added runner labels to output. ([#2669](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2669)) ([4726c1a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4726c1a2bd074e4018e2b9d0652a8ce1881ae0aa))

## [1.16.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.15.1...v1.16.0) (2022-11-18)


### Features

* Added runner labels as output. ([a3b1133](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a3b113359ca8c90d6f35552f436b9047f2972066))

## [1.15.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.15.0...v1.15.1) (2022-11-17)


### Bug Fixes

* Updated the fifo flag for deadletter queue. ([#2641](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2641)) ([a8b1645](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a8b1645bea0d5ef05f5eb65651eeea99bcf49ade))

## [1.15.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.14.0...v1.15.0) (2022-11-08)


### Features

* Allow to toggle access to EC2 instance tags ([#2592](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2592)) ([55fba22](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/55fba22474fa802f781d46e5f3e1513c354d3a38))


### Bug Fixes

* Use aws_partition for govcloud users in ami_id_ssm_parameter_read policy definition ([#2614](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2614)) ([7ac65e5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7ac65e589b1283f832bbe7e1264a45e00e9c8340))

## [1.14.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.13.0...v1.14.0) (2022-10-31)


### Features

* Experimental feature - Duplicate workflow job event to extra queue ([#2268](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2268)) ([ac046b8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ac046b8eb2a0d2d5e2219ae9ee0023fd8bdf7460))
* **runners:** Add support for looking up runner AMI ID from an SSM parameter at instance launch time ([#2520](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2520)) ([68e2381](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/68e238196877896332d36e264a64ca61a0af7ade))


### Bug Fixes

* replacing deprecated set-output in workflow ([#2564](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2564)) ([aa0afdd](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/aa0afddda56ab92e37fc20b5a4448cc999786023))

## [1.13.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.12.0...v1.13.0) (2022-10-14)

### Features

* Experimental feature - Duplicate workflow job event to extra queue ([#2268](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2268)) ([985e722](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/985e722229ce464235d206484df3d989db03e143))

## [1.12.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.11.0...v1.12.0) (2022-10-12)


### Features

* Added the AMI to machine setup info to runner workflows. ([#2451](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2451)) ([e197cbd](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e197cbddb4837840ab62c1189d069acf5f59afdb))
* **images:** add ami for windows core 2022 ([#2390](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2390)) ([97707c2](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/97707c20c3110823480119fadacd95825fadff6e))
* Log workflow id in webhook ([#2511](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2511)) ([204acf1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/204acf1d1d25322c42353505aacc5594cc4e6f9c))
* Security improvements, add option to disable userdata logging ([9a9e2ee](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9a9e2ee1089b95950d2d142a720a68eb55e53d55)), closes [#1019](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1019) [#899](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/899) [#1080](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1080) [#748](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/748) [#1112](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1112) [#903](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/903) [#1082](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1082) [#1133](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1133) [#2](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2) [#1204](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1204) [#1219](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1219) [#1202](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1202) [#1202](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1202) [#1135](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1135) [#1164](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1164) [#1154](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1154) [#1207](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1207) [#1203](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1203) [#1247](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1247) [#1222](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1222) [#1244](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1244) [#1223](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1223) [#1254](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1254) [#1286](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1286) [#1287](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1287) [#1278](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1278) [#1354](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1354) [#1357](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1357) [#1356](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1356) [#1228](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1228) [#1324](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1324) [#1358](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1358) [#1377](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1377) [#1368](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1368) [#1381](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1381) [#1415](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1415) [#1416](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1416) [#1423](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1423) [#1399](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1399) [#1401](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1401) [#1444](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1444) [#1480](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1480) [#1478](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1478) [#1479](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1479) [#1476](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1476) [#1537](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1537) [#1538](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1538) [#1541](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1541) [#1542](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1542) [#1399](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1399) [#1444](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1444) [#1572](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1572) [#1556](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1556) [#1561](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1561) [#1525](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1525) [#1591](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1591) [#1577](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1577) [#1621](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1621) [#1611](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1611) [#1615](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1615) [#1624](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1624) [#1628](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1628) [#1647](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1647) [#1644](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1644) [#1673](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1673) [#1676](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1676) [#1716](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1716) [#1741](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1741) [#1738](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1738) [#1745](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1745) [#1718](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1718) [#1791](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1791) [github.com/github-aws-runners/terraform-aws-github-runner/pull/1816#issuecomment-1060650668](https://github.com/github-aws-runners/github.com/github-aws-runners/terraform-aws-github-runner/pull/1816/issues/issuecomment-1060650668) [#1816](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1816) [#1833](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1833) [#1798](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1798) [#1815](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1815) [#1838](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1838) [#1797](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1797) [#1839](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1839) [#1812](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1812) [#1854](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1854) [#1855](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1855) [#1845](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1845) [#1832](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1832) [#1859](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1859) [#1937](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1937) [#1969](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1969) [#1970](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1970) [#1954](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1954) [#2019](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2019) [#1739](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1739) [#2019](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2019) [#2024](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2024) [#2051](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2051) [#1858](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1858) [#2085](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2085) [#2121](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2121) [#2073](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2073) [#2146](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2146) [#2145](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2145) [#2147](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2147) [#2122](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2122) [#2123](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2123) [#2181](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2181) [#2207](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2207) [#2102](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2102) [#2214](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2214) [#2052](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2052) [#2074](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2074) [#2233](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2233) [#2288](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2288) [#2302](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2302) [#2291](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2291) [#2209](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2209) [#2315](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2315) [#2314](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2314) [#2103](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2103) [#2345](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2345) [#2387](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2387) [#2371](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2371) [#2431](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2431) [#2369](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2369) [#2346](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2346) [#2325](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2325) [#2434](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2434) [#2455](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2455)


### Bug Fixes

* Remove resource group from module ([#2512](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2512)) ([2628352](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/262835219d220b5d93ccee92c5e1a1909f3e6780))

## [1.11.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.10.0...v1.11.0) (2022-10-06)


### Features

* Support s3 bucket logging for distribution cache bucket ([#2430](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2430)) ([69578e0](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/69578e0d1d381a11e359ea68957b5a3b27fad5a5))

## [1.10.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.9.1...v1.10.0) (2022-09-24)


### Features

* Download runner release via latest release API ([#2455](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2455)) ([e75e092](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e75e092f328dcba40f2d970a090dd6d16b5dd9d7))

## [1.9.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.9.0...v1.9.1) (2022-09-18)


### Bug Fixes

* **webhook:** Use `x-hub-signature-256` header as default ([#2434](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2434)) ([9c3e495](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9c3e495295e6fbd34e655bd3853b6bf631436925))

## [1.9.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.8.1...v1.9.0) (2022-09-16)


### Features

* Add option to enable access log for API gateway ([#2387](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2387)) ([fcd9fba](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fcd9fbace1df963a7b86862ecfbbae7b33a867b4))
* add s3_location_runner_distribution var as expandable for userdata ([#2371](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2371)) ([05fe737](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/05fe737375da38d4779af5acdc5c8256718109c4))
* Encrypted data at REST on SQS by default ([#2431](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2431)) ([7f3f4bf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7f3f4bf53673afcde2335bf763f7d40912880e44))
* **images:** Allow passing instance type when building windows image ([#2369](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2369)) ([eca23bf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/eca23bffe9a219d3dc66028149f5cb2d8c7eca35))


### Bug Fixes

* **runners:** Fetch instance environment tag though metadata ([#2346](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2346)) ([27db290](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/27db29046f3a23240a6a28c255cc9354d7c1804d))
* **runners:** Set the default Windows AMI to Server 2022 ([#2325](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2325)) ([78e99d1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/78e99d1c80587b8cfebedde5c5f2d615300d417d))

## [1.8.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.8.0...v1.8.1) (2022-08-17)


### Bug Fixes

* **runners:** Pass allocation strategy ([#2345](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2345)) ([68d3445](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/68d3445036babd5efa2e3077597b6ab6b958128e))

## [1.8.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.7.0...v1.8.0) (2022-08-15)


### Features

* Add option to disable lambda to sync runner binaries ([#2314](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2314)) ([9f7d32d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9f7d32d7edd724ee015a053dc1914a4b871aafe1))


### Bug Fixes

* **examples:** Upgrading ubuntu example to 22.04 ([#2250](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2250)) ([d4b7650](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d4b7650312274594a0f5274abccf99c66b594966)), closes [#2103](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2103)

## [1.7.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.6.0...v1.7.0) (2022-08-04)


### Features

* Webhook accept jobs where not all labels are provided in job. ([#2209](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2209)) ([6d9116f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6d9116fe9a8b8620691d4af8aa6c6d6e0003b502))


### Bug Fixes

* Ignore case for runner labels. ([#2315](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2315)) ([014985a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/014985a567e05e74713126fe7913d1ce0a66250e))

## [1.6.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.5.0...v1.6.0) (2022-08-03)


### Features

* Add options extra option to ebs block device mapping ([#2052](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2052)) ([7cd2524](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7cd2524ed0dba38849ac1e0e477cffda24bf21a3))
* Enable node16 default ([#2074](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2074)) ([58aa5ed](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/58aa5ed8a3f09a09b459122b5e7265f98777d59b))


### Bug Fixes

* Incorrect path of Runner logs ([#2233](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2233)) ([98eff98](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/98eff98158381bd57d59e9a54efc3ee5db294110))
* Preventing that lambda webhook fails when it tries to process an installation_repositories event ([#2288](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2288)) ([8656c83](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8656c83ec250e461062a2f4415c31f7c5186bef9))
* Update ubuntu example to fix /opt/hostedtoolcache ([#2302](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2302)) ([8eea748](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8eea74817a9817ca386b77f1b90ae9ef721e250e))
* Webhook lambda misleading log ([#2291](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2291)) ([c6275f9](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c6275f9d5a68c962e32596e4abf77b1fda6dd18f))


## [1.5.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.4.1...v1.5.0) (2022-07-08)


### Features

* Add ubuntu-jammy example image based on existing ubuntu-focal ([#2102](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2102)) ([486ae91](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/486ae9122420f621aa1c61fd4f21aff3f4e9d39e))


### Bug Fixes

* **images:** avoid wrong AMI could be selected for ubuntu focal ([#2214](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2214)) ([76be94b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/76be94beda6c13c75145c7c79dae888bdb647da3))

## [1.4.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.4.0...v1.4.1) (2022-06-30)


### Bug Fixes

* added server_side_encryption key to download trigger for distribution ([#2207](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2207)) ([404e3b6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/404e3b6fa5e2d0037a7bc8fe7674a887ab6504eb))

## [1.4.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.3.0...v1.4.0) (2022-06-23)


### Features

* Add option to match some of the labes instead of all [#2122](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2122) ([#2123](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2123)) ([c5e3c21](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c5e3c21a5c963b083ca3756a53c3e55a408c144c))


### Bug Fixes

* don't apply extra labels unless defined ([#2181](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2181)) ([c0b11bb](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c0b11bb1a78eb1a2f0453031c04f781d33d3dc17))
* Remove asterik in permission for runner lambda to describe instances ([9b9da03](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9b9da036a723305531bd4b5f66addf2f219bc1af))

## [1.3.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.2.0...v1.3.0) (2022-06-14)


### Features

* Support arm64 lambda functions ([#2121](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2121)) ([9e2a7b6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9e2a7b69cce2f7a876bbb8c865d4cd5116299640))
* Support Node16 for AWS Lambda ([#2073](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2073)) ([68a2014](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/68a2014db5e909bbf0c09bb6880f1eff2441ea7e))


### Bug Fixes

* replaced old environment variable ([#2146](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2146)) ([f2072f7](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f2072f75e9bb6c2e4979a86009a7c3fecb0b9812))
* set explicit permissions on s3 for syncer lambda ([#2145](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2145)) ([aa7edd1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/aa7edd144f64da38f4ef6ecf032118980d684fcd))
* set kms key on aws_s3_object when encryption is enabled ([#2147](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2147)) ([b4dc706](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b4dc70610b085a8a4a0f25faf9e9637a56887762))

## [1.2.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.1.1...v1.2.0) (2022-05-20)


### Features

* Replace environment variable by prefix ([#1858](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1858)) ([e2f9a27](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e2f9a2764f3c404cd2f8649db64253c9e886e2e7))

### [1.1.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.1.0...v1.1.1) (2022-05-17)


### Bug Fixes

* **runner:** Don't treat the string "false" as true. ([#2051](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2051)) ([b67c7dc](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b67c7dcbee7618f830b2365a73a2bc25f20b52b5))

## [1.1.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v1.0.0...v1.1.0) (2022-05-10)


### Features

* Add option to enable detailed monitoring for runner launch template ([#2024](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2024)) ([e73a267](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e73a267c63444a3ff07db549f9cee05fd94fc2f2))

## [1.0.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.40.4...v1.0.0) (2022-05-09)


### ⚠ BREAKING CHANGES

* var.volume_size replaced by var.block_device_mappings
* The module is upgraded to AWS Terraform provider 4.x

### Features

* Improve syncer s3 kms encryption ([38ed5be](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/38ed5be5db8af92c5e182cd83cffb6451c330970))
* Remove var.volume_size in favour of var.block_device_mappings ([4e97048](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4e9704892f8f008cb467342ae5e8c565f4c68e39))
* Support AWS 4.x Terraform provider ([#1739](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1739)) ([cfb6da2](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/cfb6da212e1d481a39427188fc1dd49a18e45cf4))


### Bug Fixes

* Wrong block device mapping ([#2019](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2019)) ([185ef20](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/185ef20301229ffbdc81874cee2c13f296256036))

### [0.40.4](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.40.3...v0.40.4) (2022-05-06)


### Bug Fixes

* Wrong block device mapping ([#2019](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2019)) ([c42a467](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c42a467164f6ad5ea7e7a0e5d22653b938cdeaf0))

### [0.40.3](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.40.2...v0.40.3) (2022-05-05)


### Bug Fixes

* Volume size is ingored ([#2014](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2014)) ([b733248](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b7332489f637ad94bcdceef1e0c7c46149f1e6a7)), closes [#1954](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1954)

### [0.40.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.40.1...v0.40.2) (2022-04-25)


### Bug Fixes

* Outputs for pool need to account for complexity ([#1970](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1970)) ([2d92906](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2d92906c54675b502d9bee7012f031db9f3e2943))

### [0.40.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.40.0...v0.40.1) (2022-04-25)


### Bug Fixes

* Avoid non semantic commontes can be merged. ([#1969](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1969)) ([ad1c872](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ad1c872601148d4c32b67735a4c6935c6e5e234f))

## [0.40.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.39.0...v0.40.0) (2022-04-13)


### Features

* Support multi runner process support for runner scale down. ([#1859](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1859)) ([3658d6a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3658d6a8a8b119133f66572fa090b720d5132f5a))


### Bug Fixes

* Set the minimal AWS provider to 3.50 ([#1937](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1937)) ([16095d8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/16095d86b848c26e93a5576302ffba8f43c12c28))

## [0.39.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.38.0...v0.39.0) (2022-03-25)


### Features

* Add possibility to create multiple ebs ([#1845](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1845)) ([7a2ca0d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7a2ca0deb0d874a1ff2460f1108f56dde8c683b8))


### Bug Fixes

* Don't delete busy runners ([#1832](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1832)) ([0e9b083](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0e9b083ec99b228037acca4477e680deb6343bb7))

## [0.38.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.37.0...v0.38.0) (2022-03-21)


### Features

* Add option for ephemeral to check builds status before scaling ([#1854](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1854)) ([7eb0bda](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7eb0bdad62d77fa418ddf5db16bdddec2cb92875))


### Bug Fixes

* Retention days was used instead of kms key id for pool ([#1855](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1855)) ([aa29d93](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/aa29d9385753e3a578fb681363f022129dc501c2))

## [0.37.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.36.0...v0.37.0) (2022-03-10)


### Features

*  Add associate_public_ip_address variable to windows AMI too ([#1819](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1819)) ([0b8e1fc](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0b8e1fc6ce0308c925f33ab5b118215259392359)), closes [/github.com/github-aws-runners/terraform-aws-github-runner/pull/1816#issuecomment-1060650668](https://github.com/github-aws-runners//github.com/github-aws-runners/terraform-aws-github-runner/pull/1816/issues/issuecomment-1060650668)
* Add associate_public_ip_address variable ([#1816](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1816)) ([052e9f8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/052e9f861ea718be9c579aa1d52bc52237aea320))
* Add option for KMS encryption for cloudwatch log groups ([#1833](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1833)) ([3f1a67f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3f1a67ff2135880b2fe217bf3403170012c304a2))
* Add SQS queue resource policy to improve security ([#1798](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1798)) ([96def9a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/96def9a2150e3aa253b9f24884097eef2a84bc99))
* Add Support for Alternative Partitions in ARNs (like govcloud) ([#1815](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1815)) ([0ba06c8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0ba06c87cd393db7caa91f603051011de6a13c46))
* Add variable to specify custom commands while building the AMI ([#1838](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1838)) ([8f9c342](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8f9c34236adc74e4ccb46a06bdd4d946a2bee9a7))


### Bug Fixes

* Autoupdate should be disabled by default ([#1797](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1797)) ([828bed6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/828bed6f021439e5a1cff690e29b6e322cb4d304))
* Create SQS DLQ policy only if DLQ is created ([#1839](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1839)) ([c88a005](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c88a0054bb00f64c69a4aef08a6258ab98ee0b9d))
* Upgrade Amazon base AMI to Amazon Linux 2 kernel 5x ([#1812](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1812)) ([9aa5532](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9aa5532e6e9d7fab7ea2f1e9995e608cf063ca5e))

## [0.36.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.35.0...v0.36.0) (2022-02-25)


### Features

* **runner:** Add option to disable auto update ([#1791](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1791)) ([c2a834f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c2a834fa324016a18227327c262203791478b394))

## [0.35.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.34.2...v0.35.0) (2022-02-18)


### Features

* Parameterise delete_on_termination ([#1758](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1758)) ([6282351](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/628235135d4e01dd1a1bde5b8f5a063eff73c05e)), closes [#1745](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1745)
* **runner:** Ability to disable default runner security group creation ([#1718](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1718)) ([94779f8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/94779f8aa217edfebfba57da73a246f7497dc793))

### [0.34.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.34.1...v0.34.2) (2022-02-11)


### Bug Fixes

* Limit AWS Terraform Provider to 3.* ([#1741](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1741)) ([0cf2b5d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0cf2b5d751600c716aaf2c222ea24721611f16a2))
* **runner:** Cannot disable cloudwatch agent ([#1738](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1738)) ([0f798ca](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0f798caf923d0be86713b36273c5b53510a57def))

### [0.34.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.34.0...v0.34.1) (2022-02-10)


### Bug Fixes

* **syncer:** Fix for windows binaries in action runner syncer ([#1716](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1716)) ([63e0e27](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/63e0e27d4ed4d93f060153d3eb706ce7b5750bd1))

## [0.34.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.33.0...v0.34.0) (2022-02-05)


### Features

* Add output image id used in launch template ([#1676](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1676)) ([a49fab4](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a49fab4703dc6eec88d83b457af268a0f802eef5))

## [0.33.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.32.0...v0.33.0) (2022-01-28)


### Features

* **images:** Added ubuntu-focual example packer configuration ([#1644](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1644)) ([997b171](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/997b17174b1c59476d1e7ff5ca8b6a9b1e1b8528))


### Bug Fixes

* **examples:** Update AMI filter ([#1673](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1673)) ([39c019c](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/39c019cb30aca306ba330a8613222f011436faec))

## [0.32.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.31.0...v0.32.0) (2022-01-19)


### Features

* **runner:** Replace patch by install ICU package for ARM runners ([#1624](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1624)) ([74cfa51](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/74cfa511291f6175f3418cf3595b08ac2894ae04))


### Bug Fixes

* **images:** use new runner install location ([#1628](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1628)) ([36c1bf5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/36c1bf5acda33f6e1498cf380a669df976fb12c6))
* **packer:** Add missing RUNNER_ARCHITECTURE for amazn-linux2 ([#1647](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1647)) ([ec497a2](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ec497a2576abb086e67f75e4358fd107e57212db))

## [0.31.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.30.1...v0.31.0) (2022-01-14)


### Features

* **packer:** add vars and minor clean up ([#1611](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1611)) ([1c897a4](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1c897a457bc4a4a53d68e90acb29cb04d1e7e0cc))


### Bug Fixes

* **webhook:** depcrated warning on ts-jest mocked ([#1615](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1615)) ([56c1ece](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/56c1ece7e02ab5b2ad0a04460412b95933092b1f))

### [0.30.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.30.0...v0.30.1) (2022-01-13)


### Bug Fixes

* **runnrs:** Pool runners to allow multiple pool_config objects ([#1621](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1621)) ([c9c7c69](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c9c7c6991b59c6f70e4a8005c042bd98b8a71840))

## [0.30.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.29.0...v0.30.0) (2022-01-12)


### Features

* Add scheduled / pull based scaling for org level runners ([#1577](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1577)) ([8197432](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8197432a21011ecc6a8519862be8872b3b5d6113))

## [0.29.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.28.0...v0.29.0) (2022-01-11)


### Features

* Strict label check and replace disable_check_wokflow_job_labels by opt in enable_workflow_job_labels_check ([#1591](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1591)) ([405b11d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/405b11db828234bfb1eb8482493a25505ce59a34))

## [0.28.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.27.2...v0.28.0) (2022-01-06)


### Features

* add option ephemeral runners ([#1374](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1374)) ([2f323d6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2f323d642c28d42b36705d2768715302f301ea33)), closes [#1399](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1399) [#1444](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1444)
* Change default location of runner to `/opt` and fix Ubuntu example ([#1572](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1572)) ([77f350b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/77f350b0be40ad953c51057b7ab1a23b68ee9862))
* Replace run instance API by create fleet API ([#1556](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1556)) ([27e974d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/27e974da12e5c009732b5dd6adc0b7a7711fba14))
* Support t4g Graviton instance type ([#1561](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1561)) ([3fa5896](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3fa5896301e1b3042e7d06babab636daa453d339))


### Bug Fixes

* Add config for windows ami ([#1525](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1525)) ([7907984](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/790798402be060fe5c3b190c00782eeca8456c11))

### [0.27.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.27.1...v0.27.2) (2021-12-22)


### Bug Fixes

* Dowload lambda see [#1541](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1541) for details. ([#1542](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1542)) ([7cb73c8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/7cb73c8a5165564244a4d6ec842238de7a4b913b))

### [0.27.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.27.0...v0.27.1) (2021-12-21)


### Bug Fixes

* add --preserve-env to start-runner.sh to enable RUNNER_ALLOW_RUNASROOT ([#1537](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1537)) ([1cd9cd3](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1cd9cd394893206bc96fb72cfdbe5b3c5c288530))
* remove export from install script. ([#1538](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1538)) ([d32ca1b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/d32ca1b74be88196eacc51a186bc5e2a505dcf0c))

## [0.27.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.26.1...v0.27.0) (2021-12-16)


### Features

* add windows support ([#1476](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1476)) ([dbba705](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/dbba705038828c86f6f5adef18f7a7a35643c359))

### [0.26.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.26.0...v0.26.1) (2021-12-08)


### Bug Fixes

* Download lambda ([#1480](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1480)) ([f1b99d9](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f1b99d98ba86a4dd35e23e04a90dc11fb233beb7))
* **syncer:** Add tests, coverage report, and refactor lambda / naming ([#1478](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1478)) ([8266442](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/8266442176025095a8eec8c4c042d4783301575e))
* install_config_runner -> install_runner ([#1479](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1479)) ([de5b93f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/de5b93fe96d08595490f78ca84b354c9d6532ffa))

## [0.26.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.25.2...v0.26.0) (2021-12-03)


### Features

* Add hooks for prebuilt images (AMI), including amazon linux packer example ([#1444](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1444)) ([060daac](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/060daac3568cd36f8b203d3f77f736df7aefb223))


### Bug Fixes

* add runners binaries bucket as terraform output ([5809fee](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5809fee194bcf7a8a1291efbb63df441b31779bb))

### [0.25.2](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.25.1...v0.25.2) (2021-12-01)


### Bug Fixes

* add logging context to runner lambda ([#1399](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1399)) ([0ba0930](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0ba09303072e58f12abd93ddd1599573d7ffafb0))
* **logging:** Add context to webhook logs ([#1401](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1401)) ([8094576](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/80945761f997498d5f6ff2755db4eb506e7d5890))

### [0.25.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.25.0...v0.25.1) (2021-11-18)


### Bug Fixes

* Add required providers to module ssm ([#1423](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1423)) ([5b68b7b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5b68b7b8bfc5308353e6ff69e129b356779d0be5))

## [0.25.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.24.0...v0.25.0) (2021-11-18)


### Features

* Add option to configure concurrent running scale up lambda ([#1415](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1415)) ([23ee630](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/23ee6303d58640cb02fe7d71e71fc7960e30f48a))


### Bug Fixes

* clean up non used variables in examples ([#1416](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1416)) ([fe65a5f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fe65a5f05184b6b5534c3b0b5fee3cdfbce7be78))

## [0.24.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.23.1...v0.24.0) (2021-11-09)


### Features

* support single line for app private key ([#1368](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1368)) ([14183ac](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/14183aca4fe097350de165030e227d8dd0cb6630))


### Bug Fixes

* update return codes, no error code for job that are ignored ([#1381](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1381)) ([f9f705f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f9f705f4a736be8d50727970e216830780142d27))

### [0.23.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.23.0...v0.23.1) (2021-11-04)


### Bug Fixes

* configurable metadata options for runners ([#1377](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1377)) ([f37df23](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f37df239a991b0d5ad6a2972ef3c9759b03b9f6f))

## [0.23.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.22.0...v0.23.0) (2021-11-04)


### Features

* add option to format logging in JSON for lambdas ([#1228](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1228)) ([a250b96](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a250b96b58c91e35ad64e3cbd8c00c3aa4475900))
* add option to specify SSE config for dist bucket ([#1324](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1324)) ([ae84302](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ae84302b284f9a076418b27426330913cf909822))


### Bug Fixes

* reducing verbosity of role and profile ([#1358](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1358)) ([922ef99](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/922ef99be52f8d780ec711f33e1f6c447dbedffd))

## [0.22.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.21.1...v0.22.0) (2021-11-01)


### Features

* adding message retention seconds ([#1354](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1354)) ([a19929f](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a19929f8467c448dfb893b5aa4565c6e53a5ef2f))
* adding var for tags for ec2s ([#1357](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1357)) ([31cf02d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/31cf02d831114e687ff3f614c768b9374f49045c))


### Bug Fixes

* add validation to distribution_bucket_name variable ([#1356](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1356)) ([6522317](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/6522317c5097ee49aee3c1c8926f72c6bd054e51))

### [0.21.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.21.0...v0.21.1) (2021-10-21)


### Bug Fixes

* **logging:** Adjusting scale logging messages and levels ([#1286](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1286)) ([665e1a6](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/665e1a6aa30610584b863c99bb5dc4509c0f11df))
* **logging:** Adjusting webhook logs and levels ([#1287](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1287)) ([9df5fb8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9df5fb88fee5b8a9428afe90ce13a0680d50471f))
* Update launch template to use metadata service v2 ([#1278](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1278)) ([ef16287](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ef1628747ec0305311a32f623dc7de64692eec40))

## [0.21.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.20.1...v0.21.0) (2021-10-11)


### Features

* Ignore github managed labels and add check disable option ([#1244](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1244)) ([859fa38](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/859fa381570ec9ab1de586f7b3ccb6bc51b47b27))
* remove unused app client since SSH key is used to secure app authorization ([#1223](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1223)) ([4cb5cf1](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4cb5cf17c37fd22b540c93c61a7c15b42d4e42e1))
* upgrade Terraform version of module 1.0.x ([#1254](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1254)) ([2a817dc](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2a817dcaf96c189ab05e3f629bf3e17a539728d6))

### [0.20.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.20.0...v0.20.1) (2021-10-07)


### Bug Fixes

* Upgrade lambda runtime to node 14.x ([#1203](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1203)) ([570949a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/570949a55a1b2f702e1d58c74533ddc86174ef8d))
* **webhook:** remove node fetch ([ca14ac5](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ca14ac51b4f824b76fa50ac4608e935702fde628))
* **webhook:** replace node-fetch by axios [#1247](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1247) ([80fff4b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/80fff4b8e2902d0347acc53d56843da507c60330))
* added more detailed logging for scaling up and down ([#1222](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1222)) ([9aa7456](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9aa7456bb16bc3e75e71eb67cd098cd49b305094))

## [0.20.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.19.1...v0.20.0) (2021-10-01)


### Features

* Add option to disable SSL verification support for GitHub Enterprise Server ([#1216](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1216)) ([3c3ef19](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/3c3ef19b176811d96f3fa821aadb10576847fb72)), closes [#1207](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1207)

### [0.19.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.19.0...v0.19.1) (2021-09-30)


### Bug Fixes

* `instance_types` from a Set to a List, so instance order preference is preserved ([#1154](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1154)) ([150d227](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/150d227c99d517366b9304663a6fdc55b0bb8475))

## [0.19.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.18.1...v0.19.0) (2021-09-30)


### Features

* **scale-down:** Update Owner Logic ([#1065](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1065)) ([ba2536b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ba2536bbf7bc7a98180b25d8703ef6edc25bc2b7)), closes [#2](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/2)


### Bug Fixes

* explicit set region for downloading runner distribution from S3 ([#1204](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1204)) ([439fb1b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/439fb1bb5b0b7b024476b41ac57436af1aa30dae))
* upgrade jest  ([#1219](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1219)) ([c8b8139](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c8b813948c973fd9157ae19f7ed3a04781d2211a))
* use dynamic block to ignore null market opts ([#1202](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1202)) ([df9bd78](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/df9bd785619c9ce8ca2eef1d9b9631271eaa9763))
* use dynamic block to ignore null market opts ([#1202](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1202)) ([06a5598](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/06a5598210e98f036593f97f74488aae1cf179da))
* **logging:** Additional Logging ([#1135](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1135)) ([f7f194d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f7f194d00090013ec28215f1939ddff5823be7ff))
* **scale-down:** Clearing cache between runs ([#1164](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1164)) ([e72227b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e72227bd8c5d76f14c42119e17eae5762c247f85))

### [0.18.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.18.0...v0.18.1) (2021-08-26)


### Bug Fixes

* webhook labels for `workflow_job` ([#1133](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1133)) ([4b39fb9](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/4b39fb9db523ad7b7ec47adf6c698323d17faed3))

## [0.18.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.17.0...v0.18.0) (2021-08-19)


### Features

* add format checking for lambdas in CI ([#899](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/899)) ([#1080](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1080)) ([ae9c277](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/ae9c2777ee27c7d984feff12c6d58edd1ef26c74))
* add option to overwrite / disable egress [#748](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/748) ([#1112](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1112)) ([9c2548d](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9c2548d3380252efbb402fe15dcacf28f883a56d))


### Bug Fixes

* replace depcrated 'request' dependency by 'node-fetch' ([#903](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/903)) ([#1082](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1082)) ([fb51756](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fb51756730ac902ff0148b362464922aea9f6d6d))

## [0.17.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.16.0...v0.17.0) (2021-08-06)


### Features

* Adding support for new workflow_job event. ([#1019](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1019)) ([a74e10b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/a74e10b625413e948703f5d3a6f61b9a98c31b66))

## [0.16.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.15.1...v0.16.0) (2021-08-05)


### Features

* make delay of webhook event configurable ([#990](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/990)) ([92a0d8a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/92a0d8a94b145c3e2fdcfa120907c17228583d93))
* Store lambda secrets paramaters in Paramater Store ([#941](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/941)) ([c6badbf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c6badbf9e1cf6bbcdd6a9841b1f342ef5fbd1ed3)), closes [#871](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/871) [#898](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/898) [#738](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/738) [#902](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/902) [#738](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/738) [#905](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/905) [#906](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/906) [#904](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/904) [#1](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1) [#752](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/752) [#909](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/909) [#752](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/752) [#908](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/908) [#752](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/752) [#887](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/887) [#752](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/752) [#885](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/885) [#752](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/752) [#889](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/889) [#752](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/752) [#892](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/892) [#752](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/752) [#907](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/907) [#752](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/752) [#864](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/864) [#918](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/918)


### Bug Fixes

* change module exports and upgrade vercel to latest release ([#1005](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1005)) ([f8f8981](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f8f8981332929619402aad161ce2a1feb61842ce))
* reduce permission required for session manager ([#1018](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/1018)) ([09476eb](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/09476eb609699d8b5eb4e1e438e13c5bfa234084))

### [0.15.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.15.0...v0.15.1) (2021-07-13)


### Bug Fixes

* apply patch for broken scale up lambda [#980](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/980) ([b957e26](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b957e263b6dbc3d299eab3236b479b9113b1fecb))

## [0.15.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.14.0...v0.15.0) (2021-07-07)


### Features

* Added support for white listing of repositories ([#915](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/915)) ([b1f451a](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b1f451a0bddf8606b443c5150e939e7628645ccf))

## [0.14.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.13.1...v0.14.0) (2021-06-17)


### Features

* support multiple instance types ([#898](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/898)) ([c996f73](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/c996f731efbfd4c3bdda4195fba48e346812e108))


### Bug Fixes

* scale down runners ([#905](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/905)) ([f024cda](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/f024cda9b08fb3ab39d2cca0cafe61512af38f0d))
* **scale:** Refactor Runner Type and Owner ([#871](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/871)) ([83dd263](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/83dd263c3b01566fd7f980ffde34e0fd2dc25e81))

### [0.13.1](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.13.0...v0.13.1) (2021-06-01)


### Bug Fixes

* .gitignore for 'secrets.auto.tfvars' ([38d7df0](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/38d7df0f86581ea3a1f64b2673707cd0427eb8e3))
* Add some essential dependecies on ubuntu example ([0079d16](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/0079d16b809fbb7391353e97bce429e295973dd5))
* fail to download wrong tag of lambda ([#840](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/840)) ([1112ca8](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/1112ca8bb2da87cfe93fea17a8070fac8bd3598b))
* increase runner sync lambda memory setting and upgrade npm dependencies ([#844](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/844)) ([b9e36e9](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/b9e36e9393c932b71817adefba411e420ba3aa65))
* revert dependency updates on runner module ([#784](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/784)) ([76cdbe3](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/76cdbe3605269ca64e532b1f850de727ad85658f))
* ubuntu example runner_log_files variable ([5b3fc5b](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/5b3fc5b59242224ef3662c0bbf61f3346d880c5e))
* ubuntu example to log syslog instead of messages ([#785](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/785)) ([fb3e5d2](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/fb3e5d28a018e55bb0cef1697173c8aa70bf8a42))
* Update ubuntu example with assume_role comment ([2478daf](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/2478daf7efb41da343a157b4001801704d25a648))
* upgrade runner module to support upgrade octokit auth-app ([#786](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/786)) ([e110318](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/e110318d5c06d073f6af0d410c06d6d48eed0724))
* **docs:** fix variable name create_service_linked_role_spot in readme ([#750](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/750)) ([42b0427](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/42b0427dd0bc25251a160033a3f1d78f6f386d5d)), closes [#736](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/736)

## [0.13.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.12.0...v0.13.0) (2021-03-28)


### Features

* Allow setting the market_options runners module to disable spot instances ([#657](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/657)) ([7487643](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/74876432f6d59325567d470c5637e2b99abefea8))

## [0.12.0](https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.11.0...v0.12.0) (2021-03-09)


### Features

* **syncer:** account access control for distribution cache bucket ([#585](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/585)) ([05c1c11](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/05c1c11a6797a650814cea29871f5b5e40d6245a))


### Bug Fixes

* Pass runner_group_name to runner module ([#603](https://github.com/github-aws-runners/terraform-aws-github-runner/issues/603)) ([54070b3](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/54070b3feec2602c9017112c98f0a669ea5f06cd))

## [0.11.0] - 2021-03-01

### Added

- feat: Tag Volume Resources (#570)
- feat: Retrieve installation id automatically if not present (triggered by ordinary webhook) (#515)

### Fixed

- fix(bucket): Adds bucket policy #536
- fix: Upgrade vpc to 2.2.0 and pre-commit terraform hooks (#538)
- fix(lint): Clean up lint (#534)

## [0.10.0] - 2021-01-27

### Added

- Support runner groups (#496)

## [0.9.1] - 2021-01-22

### Fixed

- fix(ghes): Corrects preview option #482 @mcaulifn @samuelb

## [0.9.0] - 2021-01-21

### Added

- Add support for GitHub Enterprise Server (GHES) #412, #481, #467 @mcaulifn @jonico
- Allow configuring additional security groups #392 @surminus

### Changed

- Log groups per type of logging #476
- Copy directory *after* installing zip #444 @masterful
- Update ubuntu example with rootless docker and non privileged user #433
- Changed strategy in scaling. Previous the module scaled by checking for any queued workflow for the repo initiation the check_run event. Now the module scales only if the correlated check_run is still in queued state. #423

### Fixed

- Fix missing permissions for CloudWatch Agent #445 @bennettp123
- Swap scale up/scale down timeout description #468 @jonico
- Fix for invalid configuration #466 @jonico
- Add ssm:GetParameter to runner-ssm-parameters #446 @bennettp123
- Replace crypto #429
- Scale up lambda deprecated attribute #410

### Migrations

Changes related to logging groups introduced via #476 will destroy existing logging group in AWS cloudwatch for runners log. In case you would like to keep the logging ensure you remove the log group from the state before running an apply

```bash
export RESOURCE=$(terraform state list | grep "aws_cloudwatch_log_group.runner")
terraform state rm $RESOURCE
```

## [0.8.1] - 2020-12-08

### Changed

- Policy is missing for streaming logs to cloudwatch #388

## [0.8.0] - 2020-12-08

### Changed

- Examples upgraded to Terraform 13  (#372)
### Added

- Streaming runner logs to cloudwatch #375

## [0.7.0] - 2020-12-04

### Changed

- Small clarifications in the README #368 @lrytz

### Added

- Allow operator to pass in a list of managed IAM policy ARNs for the runner role #361 @jpalomaki
- expand options for sourcing lambda to include S3 #292 @eky5006

## [0.6.0] - 2020-10-10

### Added

- Only allow tagging and termination of runner instances #201 @jpalomaki

### Fixed

- Fix pagination with listing self-hosted runners #202 @HenryNguyen5


## [0.5.0] - 2020-08-25

### Added

- feat: Manage log groups via module. When upgrading you have to import the log groups by AWS into your state. See below the example commands for the default example.

```bash
terraform import module.runners.module.runner_binaries.aws_cloudwatch_log_group.syncer "/aws/lambda/default-syncer"
terraform import module.runners.module.runners.aws_cloudwatch_log_group.scale_up "/aws/lambda/default-scale-up"
terraform import module.runners.module.runners.aws_cloudwatch_log_group.scale_down "/aws/lambda/default-scale-down"
terraform import module.runners.module.webhook.aws_cloudwatch_log_group.webhook "/aws/lambda/default-webhook"
```
- feat: Expose ami-filters and user-data template file location to users to allow use of custom AMIs

- feat: Added option to binaries syncer to upgrade to pre-releases, preventing any auto-updating on startup. Option `runner_allow_prerelease_binaries` is disabled by default. (#141, #165) @sjagoe

- feat: SSM policies are by default disabled, set `enable_ssm_on_runners` to `true` to enable access to the runner instances via SSM. (#143) @HenryNguyen5

- feat: Log full sqs event (#147) @HenryNguyen5

## [0.4.0] - 2020-08-10

### Added

- feat: idle runners #113

## [0.3.0] - 2020-08-06

### Added

- feat: Add support for ARM64 runners #102 @bdruth
- feat: added variables in the root module to allow passing in pre and and post install #45 @jaydenrasmussen

### Updated

- fix: Build script not entering all the module directories (#103) @alonsohki
- fix: Remove Orphan AWS runners (#79)
- fix: documentation for downloading lambdas (#78) @@bendavies
- fix: Rename variable and fix variables descriptions (#75) @bendavies @leoblanc

## [0.2.0] - 2020-06-15

### Added

- #34 encrypt secrets via KMS (#37)

## [0.1.0] - 2020-05-25

### Added

- #30 - Add parameter to terraform to set max number of runners (#31)

### Updated

- #17 - adding tests for syncer (#33)
- #20 #21 - Improve docs, add readme, add hook generate terraform docs

## [0.0.1] - 2020-05-19

### Added

- First release.

[unreleased]: https://github.com/github-aws-runners/terraform-aws-github-runner/compare/v0.11.0..HEAD
[0.11.0]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.10.0..v00.11.0
[0.10.0]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.9.1..v00.10.0
[0.9.1]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.9.0..v0.9.1
[0.9.0]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.8.1..v0.9.0
[0.8.1]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.9.0..v0.8.1
[0.8.0]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.7.0..v0.9.0
[0.7.0]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.6.0..v0.7.0
[0.6.0]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.5.0..v0.6.0
[0.5.0]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.4.0..v0.5.0
[0.4.0]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.3.0..v0.4.0
[0.3.0]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.2.0..v0.3.0
[0.2.0]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.1.0..v0.2.0
[0.1.0]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.0.1..v0.1.0
[0.0.1]: https://github.com/github-aws-runners/terraform-aws-github-runner/releases/tag/v0.0.1
