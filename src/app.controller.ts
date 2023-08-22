import {Controller, Get} from "@nestjs/common";


@Controller('/api')
export class AppController {

    @Get('/get-users')
    getUsers() {
        return [{id: 1, name: 'jake'}]
    }

}