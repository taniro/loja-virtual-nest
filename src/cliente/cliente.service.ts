import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {

  constructor(@InjectRepository(Cliente) private repository: Repository<Cliente>){   
  }

  create(createClienteDto: CreateClienteDto):Promise<Cliente> {

    let cliente = this.repository.create(createClienteDto)
    cliente.admin = false
    return this.repository.save(cliente)
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneByOrFail ({ id });
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.repository.save(updateClienteDto);
  }

  remove(id: number) {
    return this.repository.delete({id});
  }
}
