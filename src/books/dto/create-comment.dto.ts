import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/schemas/user.schema";

export class CreateCommentDto {
    @ApiProperty({example: 'Esperaba mas'})
    readonly title: string;
    @ApiProperty({example: 3})
    readonly stars: number;
    @ApiProperty({example: 'Aquí agregamos el comentario que se tenga sobre el libro'})
    readonly comment: string;
    @ApiProperty({example: 'jonhdoe'})
    readonly username: User;
}