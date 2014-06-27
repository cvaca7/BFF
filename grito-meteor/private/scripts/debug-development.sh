#!/bin/bash
set +v

NODE_ENV="development" NODE_OPTIONS="--debug=5858" ROOT_URL=https://premosystems.pagekite.me mrt --settings=./private/config/dev/settings.json
