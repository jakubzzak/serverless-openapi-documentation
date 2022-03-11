#!/bin/bash


yarn run build:link \
  && cd test/css \
  && yarn install \
  && yarn link sls-openapi-doc-generator
