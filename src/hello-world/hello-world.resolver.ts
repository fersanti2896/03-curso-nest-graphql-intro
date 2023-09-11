import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
    @Query( () => String, { name: 'hello', description: 'Hola mundo es lo que retorna.' } )
    helloWorld(): string {
        return 'Hola mundo';
    }

    @Query( () => Float, { name: 'random', description: 'Devuelve un número aleatorio.' } )
    getRandomNumber(): number {
        return Math.random() * 100;
    }

}
