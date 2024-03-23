class User:
	    def __init__(self, username, password):
		            self.username = username
			            self.password = password

				       def is_valid_password(self, password_to_check):
					               return password_to_check == self.password

# Example usage
						       if __name__ == "__main__":
						           # Create a user
						           user = User("Test User", "password123")

							       # Test if the password is valid
							       if user.is_valid_password("password123"):
							               print("Password is valid")
								           else:
									           print("Password is invalid")

