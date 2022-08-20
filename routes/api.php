<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/getCommentairesDut', '\App\Http\Controllers\CommentaireDutController@getCommentaires')->name('get_commentaires_dut');
Route::post('/storeCommentaireDut', '\App\Http\Controllers\CommentaireDutController@store')->name('store_commentaires_dut');
Route::delete('/deleteCommentaireDut', '\App\Http\Controllers\CommentaireDutController@destroy')->name('delete_commentaires_dut');
