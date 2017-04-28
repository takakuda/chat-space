

# DB設計

## users table

|    colum    |    type    |             option                |
|:------------|-----------:|:---------------------------------:|
|id           |integer     |                                   |
|name         |string      |index: true,null: false,unque: true|

## Association

### ・has_many :messages

### ・has_many :groups,through :chat_groups


## messages table
|     colum    |    type     |             option              |
|:-------------|------------:|:-------------------------------:|
|body          |text         |                                 |
|image         |string       |                                 |
|user_id       |integer      |foreign_key: true                |
|group_id      |integer      |foreign_key: true                |

## Association

### ・belongs_to :users

### ・belongs_to :groups


## groups table
|   colum      |    type    |              option              |
|:-------------|-----------:|:--------------------------------:|
|id            |integer     |                                  |
|name          |integer     | null:false                       |

## group table

### ・has_many :users, through :chat_groups

### .has_many :messages

## chat_groups table
|    colum     |     type   |              option              |
|id            |integer     |                                  |
|user_id       |integer     |foreign_key: true                 |
|group_id      |integer     |foreign_key: true                 |

