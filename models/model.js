const { model, Schema } = require("mongoose");
const handleMongooseError = require('../helpers/handleMongooseError')

const appOpensSchema = new Schema({
    jan: { type: Number },
    feb: { type: Number },
    mar: { type: Number },
    apr: { type: Number },
    may: { type: Number },
    jun: { type: Number },
    jul: { type: Number },
    aug: { type: Number },
    sep: { type: Number },
    oct: { type: Number },
    nov: { type: Number },
    dec: { type: Number },
  });
  
  const resultsSchema = new Schema({
    number_of_swipes: { type: Number },
    number_of_likes: { type: Number },
    number_of_no_likes: { type: Number },
    number_of_matches: { type: Number },
    number_of_no_matches: { type: Number },
    match_ratio: { type: Number },
    number_messages_sent: { type: Number },
    number_messages_received: { type: Number },
    number_of_no_conversations: { type: Number },
    number_of_dates: { type: Number },
    number_of_no_dates: { type: Number },
    number_of_sex: { type: Number },
    number_of_no_spark: { type: Number },
    number_of_relationships: { type: Number },
    longest_conversation: { type: Number },
    number_of_conversations: { type: Number },
    app_opens: {
      monday: appOpensSchema,
      tuesday: appOpensSchema,
      wednesday: appOpensSchema,
      thursday: appOpensSchema,
      friday: appOpensSchema,
      saturday: appOpensSchema,
      sunday: appOpensSchema,
    },
    number_of_superlikes: { type: Number },
    number_of_messages_sent: { type: Number },
    number_of_messages_received: { type: Number },
  });
  
  const jsonSchema = new Schema({
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    _cls: { type: String },
    email_hash: { type: String },
    year: { type: Number },
    data_upload_status: { type: String },
    results: resultsSchema,
    status: { type: String },
    id: { type: String },
  });

jsonSchema.post("save", handleMongooseError);
const Json = model("json", jsonSchema);
module.exports = Json;
