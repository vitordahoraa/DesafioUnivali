<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('master');
});

Route::get('/item', function () {
    return view('item');
});

