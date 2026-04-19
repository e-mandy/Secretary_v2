<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Professor extends Model
{
    protected $fillable = [
        "lastname",
        "firstname",
        "email"
    ];

    public function matters(): BelongsToMany{
        return $this->belongsToMany(Matter::class, "professor_matter");
    }

    public function documents(): HasMany
    {
        return $this->hasMany(Document::class);
    }
}
