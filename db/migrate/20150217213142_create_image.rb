class CreateImage < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :image
      t.text :description
      t.text :tags, array: true, default: []
      t.boolean :ready
    end
  end
end
