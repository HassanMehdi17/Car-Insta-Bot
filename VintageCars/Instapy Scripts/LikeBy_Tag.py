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
    session.set_lower_follower_count(limit = 50)
    session.set_do_comment(True, percentage=10)
    session.set_comments(['Nice!', u'beautiful :heart_eyes:'])
    session.set_user_interact(amount=3, randomize=False, percentage=100, media='Photo')

    # actions
    session.like_by_tags(['vintage', 'car', 'vintagecar', 'automobile', 'sexycar'], amount=30, interact=True)   

finally:
    # end the bot session
    session.end()
