<?php

use App\Http\Controllers\Home\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home.index');
