from model import Reservation, db
from api import app
import datetime

db.init_app(app)
db.drop_all()
db.create_all()

# generate reservations for users 0 - 9 (user0, user1, user2 ... user9)
# on dates corresponding to their user number (October 1 - 10) at 9am
for i in range(10):
    username = "user" + str(i)
    reservation_start = datetime.datetime(2021, 10, i + 1, 9)
    new_reservation = Reservation(username=username, start_time=reservation_start)
    db.session.add(new_reservation)
    db.session.commit()
