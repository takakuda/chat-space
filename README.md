

# DB設計

## users table

|    colum    |    type   |             option                 |
|:------------|----------:|:----------------------------------:|
|id           |integer    |                                    |
|name         |string     |index: true,null: false,unique: true|

## Association

### ・has_many :messages

### ・has_many :groups,through :group_users

### ・has_many :group_users


## messages table
|     colum    |    type     |             option              |
|:-------------|------------:|:-------------------------------:|
|body          |text         |                                 |
|image         |string       |                                 |
|user_id       |references   |foreign_key: true                |
|group_id      |references   |foreign_key: true                |

## Association

### ・belongs_to :users

### ・belongs_to :groups


## groups table
|   colum      |    type    |              option              |
|:-------------|-----------:|:--------------------------------:|
|id            |integer     |                                  |
|name          |integer     | null:false,unique:true           |

## group table

### ・has_many :users, through :group_users

### ・has_many :messages

### ・has_many :group_users

## group_users table
|    colum     |     type   |              option              |
|:-------------|-----------:|:--------------------------------:|
|id            |integer     |                                  |
|user_id       |integer     |foreign_key: true                 |
|group_id      |integer     |foreign_key: true                 |

