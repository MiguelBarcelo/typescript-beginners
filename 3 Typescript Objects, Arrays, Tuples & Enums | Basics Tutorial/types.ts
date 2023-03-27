// Type Aliases

type Album = string | number;

type Albums = Album[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: Albums
}


// Literal types
type Roles = 'admin' | 'user' | 'viewer';

type User = {
  name: string;
  pass: string;
  rol: Roles;
}

let mb: User = {
  name: 'Miguel',
  pass: '***',
  rol: 'admin'
}