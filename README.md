

# DB設計

## users table

|    colum    |    type    |             option                |
|:------------|-----------:|:---------------------------------:|
|id           |integer     |                                   |
|name         |string      |index: true,null: false,unque: true|

## Association

### ・has_many :messages

### ・has_many :groups,through :group_users


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

### ・has_many :users, through :group_users

### .has_many :messages

## group_users table
|    colum     |     type   |              option              |
|id            |integer     |                                  |
|user_id       |integer     |foreign_key: true                 |
|group_id      |integer     |foreign_key: true                 |

