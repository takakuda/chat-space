

# DB設計

## users table

|    colum    |    type    |             option                |
|:------------|-----------:|:---------------------------------:|
|name         |string      |index: true,null: false,unque: true|
|mail         |string      |null: false                        |

## Association

### ・has_many :chat

### ・has_many :group


## chats table
|     colum    |    type     |             option              |
|:-------------|------------:|:-------------------------------:|
|body          |text         |                                 |
|image         |string       |                                 |
|user_id       |integer      |foreign_key: true                |
|group_id      |integer      |foreign_key: true                |

## Association

### ・belongs_to :users

### ・belongs_to :group


## groups table
|   colum      |    type    |              option              |
|:-------------|-----------:|:--------------------------------:|
|user_id       |integer     |foreign_key: true                 |
|group_id      |integer     |foreign_key: true                 |

## group table

### ・belongs_to :user

### .has_many :chat
