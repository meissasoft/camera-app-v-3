export interface User {
  email?: string;
  phone?: string;
  type: string;
  accountId: string;
  fullName?: string;
  userId?: string;
  walletStatus?: string;
  walletId?: string;
  walletName?: string; // need to be removed after all the api has been referred to walletId variable
  status?: string;
  created?: number;
  verified?: boolean;
  countryCode?: string;
}

export type LoginState = {
  loginSteps: number;
};

export type Wallet = {
  email: string | undefined;
  phone: string | undefined;
  fullName: string | undefined;
  walletId: string;
};

export interface ISignupServiceRequestProps {
  requestData: User;
}

export interface ResponseUser {
  created: number;
  status: string;
  isPhoneVerified: boolean;
  isEmailVerified: boolean;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  type: string;
  countryCode: string;
  userId: string;
  walletId: string;
  walletName: string;
  walletStatus: string;
  verified: boolean;
}

export interface VerificationCodeAPIUserResponse {
  created: number;
  status: string;
  isPhoneVerified: boolean;
  isEmailVerified: boolean;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  type: string;
  countryCode: string;
  userId: string;
  walletStatus: string;
  verified: boolean;
  walletName: string;
}

export interface ISignUpServiceResponse {
  data: {
    jwtAccessToken: string;
    jwtRefreshToken: string;
    user: ResponseUser;
  };
}

export interface ILoginRequest {
  accountId: string;
  channelType?: 'email' | 'phone' | null;
}

export interface ILoginResponse {
  message: string;
  channelType: string;
  email?: string;
  phone?: string;
}

export interface IVerificationRequest {
  accountId: string;
  code: string;
}

export interface IVerificationResponse {
  jwtAccessToken: string;
  user: ResponseUser;
}
