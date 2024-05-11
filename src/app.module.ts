import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseService } from './auth/firebase.service';
import { UserController } from './auth/user.controller';
import { DriverController } from './auth/driver.controller';
import { PassengerController } from './auth/passenger.controller';
import { VehicleController } from './vehicle/vehicle.controller';
import { VehicleService } from './vehicle/vehicle.service';
import { RouteService } from './route/route.service';
import { RouteController } from './route/route.controller';

@Module({
  imports: [JwtModule.register({})],
  controllers: [
    AppController,
    UserController,
    DriverController,
    PassengerController,
    VehicleController,
    RouteController,
  ],
  providers: [AppService, FirebaseService, VehicleService, RouteService],
})
export class AppModule {}
