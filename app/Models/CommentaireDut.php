<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommentaireDut extends Model
{
    use HasFactory;

    protected $table = "commentaires_dut";
    protected $fillable = [
        'id',
        'firstname',
        'text',
    ];
}
