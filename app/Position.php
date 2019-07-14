<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    protected $fillable=['namepost','price','category_id'];

    public function category() {
        return $this->belongsTo('App\Category');
    }
}
