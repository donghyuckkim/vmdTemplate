import { Injectable, Logger, Catch } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { getSqljsManager, getConnection, getManager, Connection } from "typeorm";
import { InjectConnection } from '@nestjs/typeorm';
import { userInfo } from 'os';

@Injectable()
@Catch()
export class UsersRepository {
  constructor(
    @InjectConnection()
    private connection: Connection,
  ) {}

  async selectUserById(id: string) {
    const rs = await this.connection.query(`
      select
          user_id
          ,user_type
          ,password
      from
          vmd_users
      where 
          1=1
          and user_id = ?
    `, [id]);

    return rs;
  }
}
