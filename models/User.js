import shortid from 'shortid';

// Extend the built-in models using class inheritance
export default class User {
  // You can extend the options in a model but you should not remove the base
  // properties or change the order of the built-in options on the constructor
  constructor(name, email, image, emailVerified) {
    if (name) {
      this.name = name;
    }

    if (email) {
      this.email = email;
    }

    if (image) {
      this.image = image;
    }

    if (emailVerified) {
      var currentDate = new Date();
      this.emailVerified = currentDate;
    }
    this.referralId = shortid.generate();
    this.numberOfReferrals = 0;
    this.referrals = [];
  }
}

export const UserSchema = {
  name: 'User',
  target: User,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar',
      nullable: true
    },
    email: {
      type: 'varchar',
      unique: true,
      nullable: true
    },
    emailVerified: {
      type: 'timestamp',
      nullable: true
    },
    image: {
      type: 'varchar',
      nullable: true
    },
    createdAt: {
      type: 'timestamp',
      createDate: true
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true
    },
    referralId: {
      type: 'varchar',
      nullable: true
    },
    numberOfReferrals: {
      type: 'varchar',
      nullable: true
    },
    referrals: {
      type: 'varchar',
      nullable: true
    },
  }
};