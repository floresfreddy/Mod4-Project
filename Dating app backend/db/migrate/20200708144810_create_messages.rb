class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :message 
      t.integer :user_id 
      t.integer :sender_id

      t.timestamps
    end
  end
end
