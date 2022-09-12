class CreateGreetings < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings do |t|
      t.string :greeting

      t.timestamps
    end
    Greeting.create(greeting: '1st Greeting')
    Greeting.create(greeting: '2nd Greeting')
    Greeting.create(greeting: '3rd Greeting')
    Greeting.create(greeting: '4th Greeting')
    Greeting.create(greeting: '5th Greeting')
  end
end
