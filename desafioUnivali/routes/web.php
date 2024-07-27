<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('listagem');
});
Route::get('/catalog', function () {
    return view('listagem');
});
Route::get('/item', function () {
    return view('listagem');
});

