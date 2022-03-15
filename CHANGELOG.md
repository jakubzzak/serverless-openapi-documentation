# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.1] - 2022-03-15

### Added
- pathParams default values is now derived from the event path thus do not need to be provided explicitly

## [2.1.0] - 2022-03-11

### Fixed
- Resolved operationId duplication issue when defining multiple endpoints within one function with the ability to define version, if not defined will be extracted from the path
### Added
- Deprecated property is now being derived from the event route, if not explicitly set

## [2.0.0][] - 2021-12-10

### Removed
- Support for Node 6, minimum  is now Node 10
### Added
- (Untested) compatibility with Serverless 3.x

## [1.1.0] - 2019-05-09
### Added
- Support for securitySchemes and security #15
- Support for servers #18
- Support for schemas included by path with all $refs merged into components #7
### Changed
- Convert project from Yarn to npm #5
- Switch to eslint #8
- Update Readme #19

## [1.0.4] - 2019-05-07
### Fixed
- Fix issue with last release where the package was published from the root directory, not the build directory

## [1.0.3] - 2019-05-07
### Fixed
- Fix for requestBody and parameters #6

## [1.0.2] - 2019-05-03
### Changed
- test tag publish

## [1.0.1] - 2019-05-02
### Changed
- test tag publish

## [1.0.0] - 2019-05-02
### Changed
- inital release after forking from temando/serverless-openapi-documentation


[Unreleased]: https://github.com/conqa/serverless-openapi-documentation/compare/v2.1.2...HEAD
[2.1.1]: https://github.com/jakubzzak/serverless-openapi-documentation/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/jakubzzak/serverless-openapi-documentation/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/conqa/serverless-openapi-documentation/compare/v2.0.0...v2.0.0
[1.1.0]: https://github.com/conqa/serverless-openapi-documentation/compare/v1.0.4...v1.1.0
[1.0.4]: https://github.com/conqa/serverless-openapi-documentation/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/conqa/serverless-openapi-documentation/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/conqa/serverless-openapi-documentation/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/conqa/serverless-openapi-documentation/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/conqa/serverless-openapi-documentation/tree/v1.0.0
