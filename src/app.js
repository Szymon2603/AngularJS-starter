'use strict';

import angular from 'angular';
import HomeController from './controllers/home.controller.js';

var appModule = angular.module('app', [])
    .controller('homeController', HomeController);
