import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: 'visitor',
    message: ''
  });

  const newsItems = [
    {
      id: 1,
      title: 'Фестиваль профессий-2024: новые возможности для молодежи',
      date: '25 июля 2024',
      image: '/img/556c47cc-2f14-4a26-a053-c0bfa23038d4.jpg',
      content: 'Краевой кадровый центр объявляет о проведении масштабного Фестиваля профессий в Ставропольском крае. Мероприятие направлено на профориентацию молодежи и знакомство с востребованными специальностями региона.',
      tags: ['Фестиваль', 'Молодежь', 'Профориентация']
    },
    {
      id: 2,
      title: 'Встреча с работодателями: возможности трудоустройства',
      date: '20 июля 2024',
      image: '/img/61d87afd-4f8c-47e4-86f6-0fdf7b90bd6c.jpg',
      content: 'Состоялась встреча представителей ведущих предприятий края с выпускниками учебных заведений. Обсуждались вакансии и перспективы развития карьеры в различных отраслях экономики.',
      tags: ['Работодатели', 'Карьера', 'Трудоустройство']
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Ярмарка вакансий "Мой выбор"',
      date: '15 августа 2024',
      time: '10:00 - 16:00',
      location: 'г. Ставрополь, Дворец культуры',
      description: 'Крупнейшая ярмарка вакансий региона с участием более 50 работодателей',
      participants: 250,
      type: 'Ярмарка вакансий'
    },
    {
      id: 2,
      title: 'Профориентационный квест "Дорога к успеху"',
      date: '22 августа 2024',
      time: '14:00 - 17:00',
      location: 'г. Пятигорск, Молодежный центр',
      description: 'Интерактивный квест для школьников по знакомству с профессиями будущего',
      participants: 120,
      type: 'Квест'
    }
  ];

  const contacts = [
    {
      department: 'Отдел профориентации',
      phone: '+7 (8652) 123-456',
      email: 'prof@stavkadry.ru',
      responsible: 'Иванова Елена Петровна'
    },
    {
      department: 'Отдел работы с работодателями',
      phone: '+7 (8652) 789-012',
      email: 'employers@stavkadry.ru',
      responsible: 'Петров Сергей Александрович'
    }
  ];

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    console.log('Заявка отправлена:', applicationForm);
    alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      organization: '',
      role: 'visitor',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-government-gray">
      {/* Header */}
      <header className="bg-primary text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Building2" size={32} />
              <div>
                <h1 className="text-2xl font-bold" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                  Профориентационная витрина
                </h1>
                <p className="text-sm opacity-90">Ставропольский край</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Icon name="MapPin" size={20} />
              <span className="text-sm">Краевой кадровый центр</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="news" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-1/2 mx-auto">
            <TabsTrigger value="news" className="flex items-center space-x-2">
              <Icon name="Newspaper" size={16} />
              <span>Новости</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} />
              <span>Фестиваль профессий</span>
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center space-x-2">
              <Icon name="Phone" size={16} />
              <span>Контакты</span>
            </TabsTrigger>
          </TabsList>

          {/* News Tab */}
          <TabsContent value="news" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                Информационно-новостная лента
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Актуальные новости о профориентационных мероприятиях в Ставропольском крае
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-government-orange text-white">
                        {item.date}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {item.content}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                Фестиваль профессий
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Предстоящие профориентационные мероприятия в хронологическом порядке
              </p>
            </div>

            <div className="grid gap-6">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className="bg-government-orange text-white">
                            {event.type}
                          </Badge>
                          <span className="text-sm text-gray-500">{event.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-3" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {event.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" size={16} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={16} />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Users" size={16} />
                            <span>{event.participants} участников</span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:ml-6">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full lg:w-auto bg-government-orange hover:bg-government-orange/90">
                              <Icon name="UserPlus" size={16} className="mr-2" />
                              Подать заявку
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle style={{ fontFamily: 'PT Sans, sans-serif' }}>
                                Заявка на участие
                              </DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmitApplication} className="space-y-4">
                              <div>
                                <Label htmlFor="name">ФИО *</Label>
                                <Input
                                  id="name"
                                  required
                                  value={applicationForm.name}
                                  onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                                />
                              </div>
                              <div>
                                <Label htmlFor="email">Email *</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  required
                                  value={applicationForm.email}
                                  onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                                />
                              </div>
                              <div>
                                <Label htmlFor="phone">Телефон *</Label>
                                <Input
                                  id="phone"
                                  required
                                  value={applicationForm.phone}
                                  onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                                />
                              </div>
                              <div>
                                <Label htmlFor="organization">Организация</Label>
                                <Input
                                  id="organization"
                                  value={applicationForm.organization}
                                  onChange={(e) => setApplicationForm({...applicationForm, organization: e.target.value})}
                                />
                              </div>
                              <div>
                                <Label htmlFor="role">Тип участия</Label>
                                <select
                                  id="role"
                                  className="w-full p-2 border rounded-md"
                                  value={applicationForm.role}
                                  onChange={(e) => setApplicationForm({...applicationForm, role: e.target.value})}
                                >
                                  <option value="visitor">Посетитель</option>
                                  <option value="employer">Работодатель</option>
                                  <option value="partner">Партнер мероприятия</option>
                                </select>
                              </div>
                              <div>
                                <Label htmlFor="message">Дополнительная информация</Label>
                                <Textarea
                                  id="message"
                                  value={applicationForm.message}
                                  onChange={(e) => setApplicationForm({...applicationForm, message: e.target.value})}
                                />
                              </div>
                              <Button type="submit" className="w-full bg-primary">
                                Отправить заявку
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                Контактная информация
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Связаться с работниками Краевого кадрового центра
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {contacts.map((contact, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center space-x-2" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                      <Icon name="Building2" size={20} />
                      <span>{contact.department}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="User" size={16} className="text-government-orange" />
                      <span className="font-medium">{contact.responsible}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-government-orange" />
                      <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-government-orange" />
                      <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                        {contact.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                    Краевое государственное казенное учреждение<br />
                    "Краевой кадровый центр"
                  </h3>
                  <div className="space-y-2 text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    <p>📍 г. Ставрополь, ул. Ленина, 123</p>
                    <p>🕒 Режим работы: Пн-Пт 9:00-18:00</p>
                    <p>📧 info@stavkadry.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Building2" size={24} />
              <span className="text-lg font-bold">Профориентационная витрина</span>
            </div>
            <p className="text-sm opacity-90">
              © 2024 Краевое государственное казенное учреждение "Краевой кадровый центр"
            </p>
            <p className="text-xs opacity-75 mt-2">
              Ставропольский край • Профориентация • Карьерное развитие
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;