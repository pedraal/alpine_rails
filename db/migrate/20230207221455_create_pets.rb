class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :animal
      t.integer :person_id

      t.timestamps
    end
  end
end
