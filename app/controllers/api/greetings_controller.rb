class Api::GreetingsController < ApplicationController
    def index
        random_greeting = Greeting.all.sample
		greet = random_greeting.greeting
		render json: { greet: }
    end
end
