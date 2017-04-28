

# DB設計

##users table

|    colum    |    type    |             option                |
|:------------|-----------:|:---------------------------------:|
|name         |string      |index: true,null: false,unque: true|
|mail         |string      |null: false                        |

#Association

###・has_many :messages
