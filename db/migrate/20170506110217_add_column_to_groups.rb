class AddColumnToGroups < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :name, :string, null: false

    add_column :groups, :id, :integer, null: false
  end
end
