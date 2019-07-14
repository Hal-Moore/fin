<?php


Auth::routes();

Route::get('password/reset/{token}', function () {
    return view('index');
})->name('password.reset');

Route::get('/home', 'HomeController@index')->name('home');

//Route::post('/add-category/new','CategoryController@store');
Route::resource('/categories','CategoryController');
Route::get('/get-category/{id}','CategoryController@store');
Route::get('/get-category/{id}','CategoryController@edit');
Route::post('/update-category/{id}','CategoryController@update');
Route::resource('/position','PositionController');
Route::post('/position/{id}','PositionController@store');

Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');
