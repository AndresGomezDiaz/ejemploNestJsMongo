import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Comment {
    @Prop()
    title: string;
    @Prop()
    stars: number;
    @Prop()
    comment: string;
    @Prop({type: mongoose.Schema.Types.String, ref: 'User'})
    username: string;
}
export const CommentSchema = SchemaFactory.createForClass(Comment);
