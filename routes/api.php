<?php
Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function() {
    Route::post('signin', 'SignInController');
    Route::post('signout', 'SignOutController');
    Route::get('me', 'MeController');

    Route::get('posts', 'BlogController@index');
    Route::get('post/create', 'BlogController@create');
    Route::post('post/store', 'BlogController@store');
    Route::post('post/edit/{id}', 'BlogController@edit');
    Route::post('post/update/{id}', 'BlogController@update');
    Route::delete('post/delete/{id}', 'BlogController@destroy');

    Route::get('tickets', 'TicketController@index');
    Route::get('ticket/create', 'TicketController@create');
    Route::post('ticket/store', 'TicketController@store');
    Route::post('ticket/edit/{id}', 'TicketController@edit');
    Route::post('ticket/update/{id}', 'TicketController@update');
    Route::delete('ticket/delete/{id}', 'TicketController@destroy');

});