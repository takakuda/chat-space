

# DB設計

## users table

|    colum    |    type    |             option                |
|:------------|-----------:|:---------------------------------:|
|name         |string      |index: true,null: false,unque: true|
|user_id      |integer     |foreign_key: true                  |
|group_id     |integer     |foreign_key: true                  |

## Association

### ・has_many :messages

### ・has_many :groups,through :groups_users


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
|user_id       |integer     |foreign_key: true                 |
|group_id      |integer     |foreign_key: true                 |
|name          |string      |null: false                       |

## group table

### ・has_many :users, through :groups_users

### .has_many :messages

## groups_users table
|    colum     |     type   |              option              |
|user_id       |integer     |foreign_key: true                 |
|group_id      |integer     |foreign_key: true                 |

