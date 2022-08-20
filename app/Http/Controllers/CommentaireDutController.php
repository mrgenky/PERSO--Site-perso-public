<?php

namespace App\Http\Controllers;

use App\Models\CommentaireDut;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class CommentaireDutController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $commentaire = CommentaireDut::create([
            'firstname' => $request->firstname,
            'text' => $request->text,
        ]);
        return [
            'message' => "success",
            "comment" => $commentaire
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CommentaireDut  $commentaireDut
     * @return bool[]
     */
    public function destroy($id)
    {
        CommentaireDut::destroy($id);
        return ['success' => true];
    }

    public function getCommentaires(){
        $commentaires = CommentaireDut::orderByDesc('created_at')->get();
        return $commentaires;
    }
}
