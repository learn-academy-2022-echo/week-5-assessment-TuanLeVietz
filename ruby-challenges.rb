# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#pseudocode: We define a method called contain_letter that takes in arrayh and letter as arguments. We then filter the array, and using a do block we use .includes? to see if it includes the letter.

def contain_letter (array, letter)
    array.filter do |value| value.include? letter
    end
end

p contain_letter(beverages_array, letter_o)
p contain_letter(beverages_array, letter_t)

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

# We define a method called one_array and pass in states as its argument. Using to_a we convert the has into an array and using.flatten we get rid of the nested arrays, returning everything in one arrya. We then delete the regions so that we are left with an array containing only states. Last line will be array.sort which will sort out the array in alphabetical order. Ruby is nice so i'll be nice. 
def one_array states
    array = states.to_a.flatten!
    array.delete(:northwest)
    array.delete(:southwest)
    array.delete(:northeast)
    array.sort
end

p one_array(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudocode: a)we create a class called Bike and initialize it with model, wheels and current speed. Wheels is gonna be set to 2.We create a method bike_info thats gonna print a sentence containing all the data from the bike object. We then create a new object based on this class and named it ghost, after that we print ghost.bike_info.
# b)We create 2 more methods one called current speed and set the current speed to += so that it increases trhe speed by the given amount. And a method called brake that is gonna decrease the method by the given amount -=.Current speed cannot be negative so were gonna have it to stop at zero by including an enumerator operator set to 0.

class Bike 
    attr_accessor :model, :wheels, :current_speed
    def initialize model, wheels, current_speed
        @model = model
        @wheels = 2
        @current_speed = current_speed
    end 
    def bike_info
        p "The #{model}'s bike is so fast with its #{wheels} burning wheels that when it's going #{current_speed} mph, it leaves a trail of fire!"
    end
    def pedal_faster current_speed
        @current_speed += current_speed
    end
    def brake current_speed
        @current_speed -= current_speed
        [@current_speed, 0].max 
    end
end

ghost = Bike.new('Ghost Rider', 2, 0)
ghost.bike_info

# # -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# # Expected output example: my_bike.pedal_faster(10) => 10
# # Expected output example: my_bike.pedal_faster(18) => 28
# # Expected output example: my_bike.brake(5) => 23
# # Expected output example: my_bike.brake(25) => 0

p ghost.pedal_faster(10)
p ghost.pedal_faster(18)
p ghost.brake(5)
p ghost.brake(25)