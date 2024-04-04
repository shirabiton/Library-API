import mongoose, { Schema, Document } from 'mongoose';

enum Author {
    YonaSapir = 'YonaSapir',
    RuthRapaport = 'RuthRapaport',
    RuthieKepler = 'RuthieKepler',
    HaimEliav = 'HaimEliav',
    MayaKeynan = 'MayaKeynan',
    LibbyKlein = 'LibbyKlein',
    HaimGreenbaum = 'HaimGreenbaum',
    AvrahamOhayon = 'AvrahamOhayon',
    KobiLevy = 'KobiLevy'
}

enum Genre {
    Preschoolers = 'Preschoolers',
    EmotionChildren = 'EmotionChildren',
    KnowledgeChildren = 'KnowledgeChildren',
    StudiesChildren = 'StudiesChildren',
    TensionChildren = 'TensionChildren',
    EmotionAdults = 'EmotionAdults',
    KnowledgeAdults = 'KnowledgeAdults',
    StudiesAdults = 'StudiesAdults',
    TensionAdults = 'TensionAdults',
    Science = 'Science',
    Playing = 'Playing',
    Horror = 'Horror',
    ScienceFiction = 'ScienceFiction'
}

enum Language {
    Hebrew = 'Hebrew',
    English = 'English',
    Yiddish = 'Yiddish',
    French = 'French',
    Russian = 'Russian',
    Spanish = 'Spanish',
    Arabic = 'Arabic',
}

export interface Book extends Document {
    id: number;
    title: string;
    author: Author;
    genre: Genre;
    language: Language;
    publishYear: number;
    numOfCopies: number;
    numOfAvailableCopies: number;
    subscribers: Object[];
}

const BookSchema: Schema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    author: { type: Number, enum: Object.values(Author), required: true },
    genre: { type: Number, enum: Object.values(Genre), required: true },
    language: { type: Number, enum: Object.values(Language), required: true },
    publishYear: { type: Number },
    numOfCopies: { type: Number, required: true },
    numOfAvailableCopies: { type: Number, required: true },
    subscribers: { type: Schema.Types.ObjectId, ref: 'Subscriber' },
});

export default mongoose.model<Book>('Book', BookSchema);
