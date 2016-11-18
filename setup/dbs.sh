#!/bin/bash

mongo < ./setup/mongodb/admin.js
mongo < ./setup/mongodb/base.js
mongo < ./setup/mongodb/users.js
