from instapy import InstaPy

insta_username = 'carvintagepage'
insta_password = 'Qwertyu12'

# set headless_browser=True if you want to run InstaPy on a server
try:
    session = InstaPy(username=insta_username,
                      password=insta_password,
                      headless_browser=False,
                      multi_logs=True)
    session.login()

    # settings
    session.set_lower_follower_count(limit=100)

    # actions
    session.unfollow_users(amount=30, onlyInstapyFollowed = False, onlyInstapyMethod = 'FIFO', sleep_delay=600)    

finally:
    # end the bot session
    session.end()
