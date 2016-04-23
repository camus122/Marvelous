// create a schema


module.exports={
  create:function(dbInstance) {
    var Schema=dbInstance.Schema;
    var userSchema = new Schema({
      name: String,
      username: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      admin: Boolean,
      location: String,
      meta: {
        age: Number,
        website: String
      },
      created_at: Date,
      updated_at: Date
    });

    //METHODS: permite generar metodos custom al schema
    userSchema.methods.dudify = function() {
      // add some stuff to the users name
      this.name = this.name + '-dude';

      return this.name;
    };

// on every save, add the date
    //PRE: se ejecuta antes de realizar un save. util para validaciones e incializaciones
    userSchema.pre('save', function(next) {
      // get the current date
      var currentDate = new Date();

      // change the updated_at field to current date
      this.updated_at = currentDate;

      // if created_at doesn't exist, add to that field
      if (!this.created_at)
        this.created_at = currentDate;

      next();//Da continuidad para que realice el save
    });

    return dbInstance.model('User', userSchema);
  }
};
