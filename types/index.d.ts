/// <reference path="custom-typings.d.ts" />

export type MenuData = {
  name: string;
  children?: MenuData[];
};

export type IService = {
  icon?: string;
  name: string;
  description: string;
};

export type BlogData = {
  title: string;
  summary: string;
  author: string;
  releaseDate: string;
};

export type TeamMemberData = {
  photo: string;
  name: string;
  title: string;
}
