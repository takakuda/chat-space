

# DB設計

## users table

|    colum    |    type    |             option                |
|:------------|-----------:|:---------------------------------:|
|name         |string      |index: true,null: false,unque: true|

## Association

- ・has_many :messages

- ・has_many :group_users

- ・has_many :groups,through :group_users


## messages table
|     colum    |    type     |             option              |
|:-------------|------------:|:-------------------------------:|
|body          |text         |                                 |
|image         |string       |                                 |
|user_id       |references   |foreign_key: true                |
|group_id      |deferences   |foreign_key: true                |

## Association

- ・belongs_to :user

- ・belongs_to :group


## groups table
|   colum      |    type    |              option              |
|:-------------|-----------:|:--------------------------------:|
|name          |integer     | null:false                       |

## group table

- ・has_many :messages

- ・has_many :group_users

- ・has_many :users, through :group_users

## group_users table
|    colum     |     type   |              option              |
|:-------------|-----------:|:--------------------------------:|
|user_id       |references  |foreign_key: true                 |
|group_id      |references  |foreign_key: true                 |

