class CreateTerms < ActiveRecord::Migration[6.0]
  def change
    create_table :terms do |t|
      t.string :terms
      t.integer :user_id 

      t.timestamps
    end
  end
end
