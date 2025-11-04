import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

//export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post extends Document {
  // @Prop()
  // id: string;

  @Prop({ required: true, maxlength: 100 })
  title: string;

  @Prop({ required: true })
  content: string;

  // @Prop()
  // name: string;

  // @Prop()
  // createdDt: Date;

  // @Prop()
  // updatedDt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
